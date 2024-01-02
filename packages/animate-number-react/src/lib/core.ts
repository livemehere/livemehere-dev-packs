type Easing = "linear" | "easeOut" | "easeIn" | "easeInOut";
export interface Options {
  /** @description initialValue */
  startVal?: number;
  /** @description millisecond (default 2000) */
  duration?: number;
  /** @description linear, easeOut, easeIn, easeInOut (default 'easeOut') */
  easing?: Easing;
  /** @description custom formatter(not work when animation:true) */
  formatter?: (value: number) => string;
  /** @description separator (default ',') */
  separator?: string;
  /** @description animation (default true) */
  animation?: boolean;
  /** @description slide animation (default true) */
  slideAnimation?: boolean;
  /** @description decimal (default 0) */
  decimal?: number;
  /** @description lastDigitDelay (default 800) */
  lastDigitDelay?: number;
}

interface Cell {
  container: HTMLElement;
  position: number;
  current?: string;
  clearTimer?: any;
  progress?: number;
}

export const defaultOptions: Options = {
  startVal: 0,
  duration: 2000,
  easing: "easeOut",
  separator: ",",
  animation: true,
  slideAnimation: true,
  decimal: 0,
  lastDigitDelay: 800,
};

export default class AnimateNumberCore {
  private el: HTMLElement;
  private startVal: number;
  private endVal: number;
  private duration: number;
  private easing: Easing;
  private separator: string;
  private rAF: number | null;
  private frameVal: number;
  private startTime: number | null;
  private animation: boolean;
  private slideAnimation: boolean;
  private decimal: number;
  private formatter: (value: number) => string;
  options: Options; // default options

  /* ANIMATE */
  private cell_digits: Cell[] | null;
  private lastDigitDelay: number;
  private _sepSize: number;
  private _signSize: number;

  constructor(target: HTMLElement, endVal: number, options?: Options) {
    this.options = {
      ...defaultOptions,
      formatter: this._formatter,
      ...options,
    };
    this.el = target;
    this.endVal = endVal;
    this.reset();
  }

  reset() {
    this.rAF && cancelAnimationFrame(this.rAF);
    this.rAF = null;

    this.el.innerHTML = "";
    this.startTime = null;
    this.cell_digits = null;

    this.startVal = this.options.startVal!;
    this.frameVal = this.startVal;
    this.duration = this.options.duration!;
    this.easing = this.options.easing!;
    this.separator = this.options.separator!;
    this.animation = this.options.animation!;
    this.slideAnimation = this.options.slideAnimation!;
    this.decimal = this.options.decimal!;
    this.lastDigitDelay = this.options.lastDigitDelay!;
    this.formatter = this.options.formatter!;
  }

  start() {
    this.reset();
    this.rAF = requestAnimationFrame(this._animate.bind(this));
  }

  setToEnd() {
    this.reset();
    this._render(this.endVal, 1);
  }

  update(newEndVal: number) {
    if (newEndVal === this.endVal) return;
    this.startVal = this.frameVal;
    this.startTime = null;
    this.endVal = newEndVal;
    this.rAF = requestAnimationFrame(this._animate.bind(this));
  }

  private _animate(timestamp: number) {
    if (!this.startTime) {
      this.startTime = timestamp;
    }

    /* prevent values that exceed duration, progress */
    const elapsedTime = Math.min(timestamp - this.startTime, this.duration);
    const progress = Math.min(elapsedTime / this.duration, 1);
    const mount = this.endVal - this.startVal;

    /* update value */
    const easeFn = this[
      `_${this.easing}` as keyof AnimateNumberCore
    ] as Function;
    this.frameVal = easeFn(elapsedTime, this.startVal, mount, this.duration);
    this._render(this.frameVal, progress);

    /* until complete */
    if (progress !== 1) {
      this.rAF = requestAnimationFrame(this._animate.bind(this));
    } else {
      this.rAF && clearInterval(this.rAF);
    }
  }

  private _render(value: number, progress: number) {
    /* simple set html string */
    if (!this.slideAnimation) {
      this.el.innerHTML = this.formatter(value);
      return;
    }

    /* slide animation */
    this._countRender(value, progress);
  }

  /* default format ex) 9,999,999,999 ... */
  private _formatter(value: number) {
    if (this.separator === "") return value.toFixed(this.decimal);
    let fixedV = value.toFixed(this.decimal);
    const reg = /(^[+-]?\d+)(\d{3})/;
    while (reg.test(fixedV)) {
      fixedV = fixedV.replace(reg, "$1" + this.separator + "$2");
    }
    return fixedV;
  }

  private _linear(t: number, b: number, c: number, d: number) {
    return c * (t / d) + b;
  }

  private _easeOut(t: number, b: number, c: number, d: number) {
    return -c * (t /= d) * (t - 2) + b;
  }

  private _easeIn(t: number, b: number, c: number, d: number) {
    return c * (t /= d) * t + b;
  }

  private _easeInOut(t: number, b: number, c: number, d: number) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  }

  private _countRender(value: number, progress: number) {
    const formattedValue = this._formatter(value);

    /* INIT */
    if (!this.cell_digits) {
      this._appendScript();
      this.cell_digits = [];
      this.el.innerHTML = `<div class="counter-up-container"></div>`;
    }

    const blank = '<span style="color:transparent">0</span>';
    if (!this._sepSize) {
      const separator = document.createElement("span");
      separator.id = "sep-size";
      separator.innerHTML = this.separator;
      separator.style.color = "transparent";
      separator.style.position = "absolute";
      separator.style.top = "-1000px";
      separator.style.left = "-1000px";
      separator.style.zIndex = "-1";
      separator.style.fontSize = "1em";

      this.el.append(separator);
      this._sepSize = this.el.querySelector("#sep-size")?.clientWidth || 0;
      this.el.removeChild(this.el.querySelector("#sep-size") as Node);
    }

    if (!this._signSize) {
      const sign = document.createElement("span");
      sign.id = "sign-size";
      sign.innerHTML = "$";
      sign.style.color = "transparent";
      sign.style.position = "absolute";
      sign.style.top = "-1000px";
      sign.style.left = "-1000px";
      sign.style.zIndex = "-1";
      sign.style.fontSize = "1em";

      this.el.append(sign);
      this._signSize = this.el.querySelector("#sign-size")?.clientWidth || 0;
      this.el.removeChild(this.el.querySelector("#sign-size") as Node);
    }

    const transition = `transform ${this.duration}ms ease-out`;

    /* create span as many as the number of digits to be displayed */
    for (let i = this.cell_digits.length; i < formattedValue.length; i++) {
      const container = document.createElement("span");
      container.style.transition = transition;
      container.innerHTML = blank;
      this.el.firstChild?.appendChild(container);
      this.cell_digits.push({
        container,
        position: 0,
        current: undefined,
      });
    }

    /* RENDER */
    for (let i = 0; i < this.cell_digits.length; i++) {
      const cell = this.cell_digits[i];
      const curValue = formattedValue.charAt(i) || "$";

      /* if cell value is different from updated value, add <span> tag to container */
      if (cell.current !== curValue) {
        const newDigit = document.createElement("span");
        newDigit.innerHTML = curValue;
        if (curValue === this.separator) {
          cell.container.style.width = `${this._sepSize}px`;
        } else if (curValue === "-") {
          cell.container.style.width = `${this._signSize}px`;
        } else {
          cell.container.style.width = "auto";
        }
        if (curValue === "$") {
          newDigit.style.color = "transparent";
        }
        cell.current = curValue;
        cell.progress = progress;
        this._appendDigit(cell, newDigit);
      }

      clearTimeout(cell.clearTimer);

      /* remove passed digit spans */
      cell.clearTimer = setTimeout(() => {
        cell.container.style.transition = "";
        cell.container.style.transform = "translateY(0)";
        cell.position = 0;
        while (cell.container.children.length > 1) {
          cell.container.removeChild(cell.container.firstChild as Node);
        }

        if (cell.container.firstChild?.textContent === "$") {
          cell.container.remove();
          this.cell_digits = this.cell_digits!.filter((c) => c.current !== "$");
        }

        setTimeout(() => {
          cell.container.style.transition = transition;
        }, 100);
      }, this.duration);
    }
  }

  private _appendScript() {
    /* run only once for the entire website */
    if (!document.querySelector("style[kong-count-up]")) {
      const style = document.createElement("style");
      style.setAttribute("kong-count-up", "kong-count-up");
      style.innerHTML = `
           .counter-up-container {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              position: relative;
              overflow: hidden;
              height: 1em;         
           }
           
           .counter-up-container > span {
              height: 1em;
              line-height: 100%;
              display: inline-flex;
              flex-direction: column;
              align-items: center;
              justify-content: start;
            }
          `;
      document.head.append(style);
    }
  }

  private _appendDigit(cell: Cell, newDigit: HTMLSpanElement) {
    cell.position -= 1;
    cell.container.appendChild(newDigit);
    let remainDuration = this.duration - this.duration * cell.progress!;
    if (cell.progress! >= 0.7) {
      remainDuration += this.lastDigitDelay;
    }

    requestAnimationFrame(() => {
      cell.container.style.transform = `translateY(${cell.position}em)`;
      cell.container.style.transition = `transform ${remainDuration}ms ease-out`;
    });
  }
}
