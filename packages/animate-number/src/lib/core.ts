type Easing = "linear" | "easeOut" | "easeIn" | "easeInOut";
interface Options {
  startVal?: number;
  duration?: number;
  easing?: Easing;
  formatter?: (value: number) => string;
  separator?: string;
  animation?: boolean;
  decimal?: number;
  lastDigitDelay?: number;
}

interface Cell {
  container: HTMLElement;
  position: number;
  current?: string;
  clearTimer?: any;
  progress?: number;
}

const defaultOptions: Options = {
  startVal: 0,
  duration: 2000,
  easing: "linear",
  formatter: () => "",
  separator: ",",
  animation: false,
  decimal: 0,
  lastDigitDelay: 2000,
};

export default class AnimateNumber {
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
  private decimal: number;
  private formatter: (value: number) => string;
  options: Options; // default options

  /* ANIMATE */
  private cell_digits: Cell[] | null;
  private lastDigitDelay: number;

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
    this.decimal = this.options.decimal!;
    this.lastDigitDelay = this.options.lastDigitDelay!;
    this.formatter = this.options.formatter!;
  }

  start() {
    this.reset();
    this.rAF = requestAnimationFrame(this._animate.bind(this));
  }

  update(newEndVal: number) {
    if (newEndVal === this.endVal) return;
    if (this.animation) {
      // TODO: 한번 애니메이션이 동작된 상황이기 때문에, 그 상황에 맞게 추가적인 처리 필요
    }
    this.startVal = this.frameVal;
    this.startTime = null;
    this.endVal = newEndVal;
    this.rAF = requestAnimationFrame(this._animate.bind(this));
  }

  private _animate(timestamp: number) {
    if (!this.startTime) {
      this.startTime = timestamp;
    }
    /* 시간,진행도 계산 ms 단위로 계산되기 때문에, 최대값을 넘지 않게 조치 */
    const elapsedTime = Math.min(timestamp - this.startTime, this.duration);
    const progress = Math.min(elapsedTime / this.duration, 1);
    const mount = this.endVal - this.startVal;

    /* 현재 progress 에 해당하는 값 계산 및 업데이트 */
    const easeFn = this[`_${this.easing}` as keyof AnimateNumber] as Function;
    this.frameVal = easeFn(elapsedTime, this.startVal, mount, this.duration);
    this._render(this.frameVal, progress);

    /* 완료될 때 까지 반복 */
    if (progress !== 1) {
      this.rAF = requestAnimationFrame(this._animate.bind(this));
    } else {
      this.rAF && clearInterval(this.rAF);
    }
  }

  /* 최종 값이 들어오면, 입맛에 맞게 렌더링 */
  private _render(value: number, progress: number) {
    /* 단순히 innerHTML 로 set */
    if (!this.animation) {
      this.el.innerHTML = this.formatter(value);
      return;
    }

    /* animation=true -> 애니메이션 효과 */
    this._countRender(value, progress);
  }

  /* 기본 포맷 ex) 9,999,999,999 ... 소수점 */
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
    let createNow = false;

    /* INIT */
    if (!this.cell_digits) {
      createNow = true;
      this._appendScript();
      this.cell_digits = [];
      this.el.innerHTML = `<div class="counter-up-container"></div>`;
    }

    const blank = '<span style="color:transparent">0</span>';
    const transition = `transform ${this.duration}ms ease-out`;

    /* 표시할 숫자만큼의 <span> 컨테이너 생성 */
    for (let i = this.cell_digits.length; i < formattedValue.length; i++) {
      const container = document.createElement("span");
      container.style.transition = transition;
      container.innerHTML = createNow ? "" : blank;
      this.el.firstChild?.appendChild(container);
      this.cell_digits.push({
        container,
        position: createNow ? 1 : 0,
        current: undefined,
      });
    }
    /* RENDER */
    for (let i = 0; i < this.cell_digits.length; i++) {
      const cell = this.cell_digits[i];
      const curValue = formattedValue.charAt(i);

      /* 현제 cell 의 값이, 업데이트된 값과 다르면 container 에 <span> 태그를 추가한다. */
      if (cell.current !== curValue) {
        const newDigit = document.createElement("span");
        newDigit.innerHTML = curValue;
        cell.current = curValue;
        cell.progress = progress;
        this._appendDigit(cell, newDigit);
      }

      clearTimeout(cell.clearTimer);
      /* remove passed digit spans */
      cell.clearTimer = setTimeout(
        () => {
          const cell = this.cell_digits![i];
          if (!cell) return;
          cell.container.style.transition = "";
          cell.container.style.transform = "translateY(0)";
          cell.position = 0;
          while (cell.container.children.length > 1) {
            cell.container.removeChild(cell.container.firstChild as Node);
          }

          requestAnimationFrame(() => {
            cell.container.style.transition = transition;
          });
        },
        this.duration * 2 + this.lastDigitDelay,
      ); // 애니메이션 시간 * 2 + 마지막 딜레이 (정확한 값은 아니고, 대략적인 값)
    }
  }

  private _appendScript() {
    /* 웹사이트 통틀어서 단한번만 실행 */
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
              height: 100%;
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
