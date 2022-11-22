import './style.scss';

function Mountains() {
  return (
    <div className="mountains-container">
    <div className="mountains">
        <section className="stage">
            <svg height="390" width="550" id="mountains">
                <polygon points="300,390 190,90 320,130 400,340" fill="#5d2042" />
                <polygon points="0,340 108,190 194,100 201,120 301,390" fill="#320e40" />
                <polygon points="14,348 117,174 194,102 172,377" fill="#3b1642" fillOpacity="0.8" />
                <polygon points="120,174 194,102 233,206 144,275" fill="#3d1744" fillOpacity="0.9" />

                <polygon points="233,206 288,177 324,214" fill="#421943" />
                <polygon points="233,206 324,214 247,245" fill="#3e1743" />
                <polygon points="247,245 324,214 360,360" fill="#411842" />
                <polygon points="324,214 288,177 350,210" fill="#632242" />
                <polygon points="324,214 350,210 360,360" fill="#652343" />

                <g id="apex">
                    <polygon points="108,190 170,40 194,100" fill="#aeacb9" />
                    <polygon points="170,40 234,6 260,70 288,178 194,102" fill="#ceced8" />
                    <polygon points="234,6 290,80 320,132 288,178" fill="#ffffed" />
                </g>
            </svg>

            {/* <Clouds /> */}

            <svg id="ground"></svg>

            <svg id="hills" width="700" height="170">
                <polygon points="480,70 530,100 560,90 516,40" fill="#9b9d57" />
                <polygon points="480,70 530,100 412,84" fill="#7d8f57" />
                <polygon points="530,100 412,84 360,138" fill="#748857" />
                <polygon points="360,138 240,140 320,82" fill="#748857" />

                <polygon points="412,84 360,140 320,82" fill="#88945a" />
                <polygon points="320,82 240,140 210,64" fill="#597252" />
                <polygon points="300,78 100,100 0,104 170,58" fill="#4f654f" />
                <polygon points="172,58 145,40 122,48 66,79 0,104" fill="#536a50" />
            </svg>

            <svg className="trees">
                <g className="tree" id="tree" transform="translate(400,30)">
                    <polygon points="25,75 27,44 21,34 25,33 30,41 38,33 40,34 31,46 29,75" fill="#3f2145" />
                    <polygon points="29,75 31,46 32,45 32,74" fill="#812743" />

                    <polygon points="2,21 11,33 20,32 27,29 32,23 24,35 11,34" fill="#282246" />
                    <polygon points="27,29 33,13 18,0 29,2 37,13 32,23" fill="#6a7749" />

                    <polygon points="33,23 35,32 45,37 55,27 44,35 37,31" fill="#210f3f" />
                    <polygon points="37,31 38,17 46,17 50,31" fill="#354346" />
                    <polygon points="37,31 50,31 45,37" fill="#292941" />
                    <polygon points="33,23 37,31 38,17" fill="#2b2d42" />
                    <polygon points="38,17 46,17 46,11" fill="#495e4b" />
                    <polygon points="46,17 46,11 54,18" fill="#5b7049" />
                    <polygon points="44,11 54,18 56,26 50,31" fill="#515d49" />

                    <polygon points="11,33 20,32 27,29 15,19" fill="#292e42" />
                    <polygon points="27,29 33,13 15,19" fill="#424f46" />
                    <polygon points="33,13 18,0 15,19" fill="#48604a" />
                    <polygon points="18,0 7,5 15,19" fill="#3a5449" />
                    <polygon points="7,5 0,18 15,19" fill="#344847" />
                    <polygon points="0,18 11,33 15,19" fill="#292c4b" />

                    <polygon points="175,4 121,10 53,12 12,16 5,20 47,22 122,12 180,4" fill="#648155" transform="translate(-148,70)" />
                </g>

                <use x="-215" y="-23" xlinkHref="#tree" transform="scale(0.8)" />
                <use x="-220" y="-20" xlinkHref="#tree" />
                <use x="540" y="-30" xlinkHref="#tree" />
                <use x="480" y="-20" xlinkHref="#tree" />
                <use x="440" y="-15" xlinkHref="#tree" transform="scale(1.2)" />

            </svg>
            <canvas id="sky"></canvas>
        </section>
    </div>
    </div>
  );
}

export default Mountains;
