

export default function STM32SetupBlog() {
  return (
    <>
      

      <article className="articleContainer mt-20 md:ml-[100px]">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold mb-2">
              STM32 Setup — Step-by-step (Hindi)
            </h1>
            <p className="text-gray-400">
              Ye guide beginners ke liye hai: hardware, toolchain, CubeMX/IDE,
              example code aur debugging tips.
            </p>
          </header>

          {/* 1. STM32 kya hai */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>1. STM32 kya hai?</h2>
            <p>
              STM32 ek ARM Cortex-M based microcontroller family hai by
              STMicroelectronics. Ye wide range of cores (M0/M0+/M3/M4/M7/M33)
              aur peripherals provide karta hai — GPIO, UART, I²C, SPI, ADC,
              timers, DMA, USB, CAN, etc.
            </p>
          </section>

          {/* 2. Zaroori hardware */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>2. Zaroori hardware</h2>
            <ul>
              <li>
                STM32 development board (e.g., Nucleo / Discovery / Blue Pill /
                custom board)
              </li>
              <li>
                ST-Link/V2 or onboard ST-Link debugger (Nucleo/Discovery boards
                me built-in hota hai)
              </li>
              <li>USB cable, breadboard, jumper wires, LED + resistor</li>
            </ul>
          </section>

          {/* 3. Required software */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>3. Required software</h2>
            <ol>
              <li>
                <strong>STM32CubeIDE</strong> — ST ka official IDE jo CubeMX
                configuration tool ko integrate karta hai. (Recommended for
                beginners)
              </li>
              <li>
                <strong>STM32CubeMX</strong> — pinout/clock generator (agar aap
                CLI/VSCode use kar rahe ho to standalone CubeMX helpful hai)
              </li>
              <li>
                <strong>GNU Arm Embedded Toolchain</strong> (arm-none-eabi-gcc)
                — compiler
              </li>
              <li>
                <strong>OpenOCD / ST-Link Utility</strong> — flashing/debugging
                (agar custom setup hai)
              </li>
              <li>
                <strong>VS Code + PlatformIO</strong> — agar lightweight editor
                chahte hain
              </li>
            </ol>
          </section>

          {/* 4. Project steps */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>4. Project banane ke basic steps (CubeMX / CubeIDE)</h2>
            <ol>
              <li>
                <strong>Board/MCU select:</strong> Nucleo board choose karein ya
                MCU part number (e.g., STM32F103C8) select karein.
              </li>
              <li>
                <strong>Pinout configure:</strong> On-chip peripherals ko pinout
                pe map karein — e.g., PA5 as GPIO output for LED.
              </li>
              <li>
                <strong>Clock config:</strong> System clock set karein
                (HSE/HSI/LSE) aur PLL settings adjust karein.
              </li>
              <li>
                <strong>Middleware/Peripherals:</strong> UART, I2C, SPI, ADC
                wagairah enable karein aur settings set karein (baudrate, mode,
                prescalers).
              </li>
              <li>
                <strong>Project settings & code generation:</strong> Toolchain
                (STM32CubeIDE, Makefile, SW4STM32) choose kar ke "Generate Code"
                karein.
              </li>
              <li>
                <strong>Build & Flash:</strong> Build button press karein, fir
                ST-Link se flash & debug start karein.
              </li>
            </ol>
          </section>

          {/* 5. Blink Example */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>5. Simple Blink example (HAL)</h2>
            <p>
              CubeMX generated project me <code>main.c</code> me aise code
              milega — yeh example PA5 pin ko toggle karta hai:
            </p>
            <pre className="rounded-md p-4 bg-gray-800 overflow-auto">
{`/* USER CODE BEGIN 2 */
HAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_RESET);
/* USER CODE END 2 */

while (1)
{
  HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
  HAL_Delay(500); // 500 ms
}`}
            </pre>
            <p>
              Yeh HAL API use karta hai: <code>HAL_GPIO_TogglePin</code> aur{" "}
              <code>HAL_Delay</code>. CubeMX aapko GPIO init boilerplate
              generate karke dega.
            </p>
          </section>

          {/* 6. HAL vs LL vs Bare-Metal */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>6. HAL vs LL vs Bare-Metal</h2>
            <ul>
              <li>
                <strong>HAL:</strong> High level, portable, easy to use —
                beginners ke liye best.
              </li>
              <li>
                <strong>LL (Low Layer):</strong> Lightweight, faster,
                hardware-close — optimization chahte ho toh use karein.
              </li>
              <li>
                <strong>Bare-metal / register:</strong> Full control, lekin
                error-prone aur time-consuming.
              </li>
            </ul>
          </section>

          {/* 7. VS Code / PlatformIO */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>7. VS Code / PlatformIO workflow</h2>
            <p>
              VS Code me PlatformIO use karke aap rapid projects manage kar
              sakte hain. Agar CubeMX se code generate kar rahe ho toh
              makefile/CMake integration zaroor check karein — PlatformIO ke
              boards & frameworks bhi available hain.
            </p>
          </section>

          {/* 8. Debugging */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>8. Debugging tips</h2>
            <ul>
              <li>
                ST-Link connection check karein (drivers install honi chahiye)
              </li>
              <li>
                Reset/boot0 pin state verify karein agar flashing fail ho
              </li>
              <li>
                Use SWD pins (PA13/PA14 on many MCUs) for debug
              </li>
              <li>OpenOCD logs padh kar error reasons samjhein</li>
            </ul>
          </section>

          {/* 9. Troubleshooting */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>9. Common troubleshooting</h2>
            <ol>
              <li>
                "No target device found" — check power, USB cable, drivers,
                board jumper
              </li>
              <li>
                Wrong clock config — MCU hang kare toh HSE/PLL settings check
                karein
              </li>
              <li>
                Compilation errors after code generation —
                toolchain/version mismatch ho sakta hai
              </li>
            </ol>
          </section>

          {/* 10. Resources */}
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>10. Useful resources</h2>
            <ul>
              <li>ST official: STM32CubeIDE & STM32CubeMX documentation</li>
              <li>STM32 step-by-step wiki & community forums</li>
              <li>STM32 example projects & HAL/LL user manuals</li>
            </ul>
          </section>

         
        </div>
      </article>
    </>
  );
}
