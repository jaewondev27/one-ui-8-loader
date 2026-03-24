class GalaxyLoader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하여 기존 CSS와 충돌 방지
    }

    static get observedAttributes() {
        return ['size', 'speed']; // 사용자가 조절할 수 있는 속성들
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const size = this.getAttribute('size') || '2.5'; // 기본 크기 2.5배
        const speed = this.getAttribute('speed') || '3.0'; // 기본 속도 3초

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            .gbx {
                width: 20px;
                height: 20px;
                position: relative;
                transform: scale(${size});
            }
            .bx {
                position: absolute;
                width: 100%;
                height: 100%;
                animation: rotateFull ${speed}s linear infinite;
            }
            .bx i {
                position: absolute;
                width: 100%;
                height: 100%;
                animation: moveDistance ${parseFloat(speed)/2}s alternate infinite ease-in-out;
            }
            .bx i::before {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 5px;
                height: 5px;
                background: linear-gradient(to bottom, #74b9ff 0%, rgba(4, 129, 255, 0.7) 100%);
                border-radius: 50%;
                content: "";
            }
            .bx i:first-child { z-index: 10; }
            .bx i:first-child::before {
                background: linear-gradient(to bottom, #55efc4 0%, rgba(0, 213, 147, 0.7) 100%);
            }
            .bx i:nth-child(1) { --angle: 0deg; }
            .bx i:nth-child(2) { --angle: 90deg; }
            .bx i:nth-child(3) { --angle: 180deg; }
            .bx i:nth-child(4) { --angle: 270deg; }

            @keyframes moveDistance {
                0% { transform: rotate(var(--angle)) translateY(0px); }
                100% { transform: rotate(var(--angle)) translateY(-10px); }
            }
            @keyframes rotateFull {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(1080deg); }
            }
        </style>
        <div class="ui-load-glx">
            <div class="gbx">
                <div class="bx">
                    <i></i><i></i><i></i><i></i>
                </div>
            </div>
        </div>
        `;
    }
}

// <galaxy-loader> 라는 이름으로 태그 등록
customElements.define('galaxy-loader', GalaxyLoader);
