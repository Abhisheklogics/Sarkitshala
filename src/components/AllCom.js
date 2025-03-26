import Image from "next/image";
import Side from "./side";
import dynamic from "next/dynamic";

const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});

export default function AllCom({ data }) {
  let codeArr=[
    `Red → Pin 9  
Green → Pin 10  
Blue → Pin 11  
GND → Arduino GND  

#define redPin 9    // Red pin of RGB LED
#define greenPin 10 // Green pin of RGB LED
#define bluePin 11  // Blue pin of RGB LED

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void loop() {
  setColor(255, 0, 0);   // Red
  delay(1000);
  setColor(0, 255, 0);   // Green
  delay(1000);
  setColor(0, 0, 255);   // Blue
  delay(1000);
  setColor(255, 255, 0); // Yellow
  delay(1000);
  setColor(0, 255, 255); // Cyan
  delay(1000);
  setColor(255, 0, 255); // Magenta
  delay(1000);
  setColor(255, 255, 255); // White
  delay(1000);
  setColor(0, 0, 0); // Off
  delay(1000);
}

// Helper function to set RGB color
void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

`,
    `
    #define irPin 7     // IR sensor output pin connected to D7
#define ledPin 13   // LED pin for indication

void setup() {
  pinMode(irPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int irState = digitalRead(irPin); // Read IR sensor output

  if (irState == LOW) {
    Serial.println("Obstacle Detected!");
    digitalWrite(ledPin, HIGH); // Turn ON LED
  } else {
    Serial.println("No Obstacle");
    digitalWrite(ledPin, LOW); // Turn OFF LED
  }

  delay(500);
}
`,
`
#define ldrPin A0   // LDR connected to Analog pin A0
#define ledPin 13   // LED pin for indication

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int ldrValue = analogRead(ldrPin); // Read LDR value
  Serial.print("LDR Value: ");
  Serial.println(ldrValue);

  if (ldrValue < 300) {   // Dark condition (threshold)
    digitalWrite(ledPin, HIGH);  // Turn ON LED
    Serial.println("It's dark!");
  } else {
    digitalWrite(ledPin, LOW);   // Turn OFF LED
    Serial.println("It's bright!");
  }

  delay(500);
}

`,
`
Row 1 → Pin 9  
Row 2 → Pin 8  
Row 3 → Pin 7  
Row 4 → Pin 6  
Col 1 → Pin 5  
Col 2 → Pin 4  
Col 3 → Pin 3  
Col 4 → Pin 2  
#include <Keypad.h>

const byte ROWS = 4; // Four rows
const byte COLS = 4; // Four columns
char keys[ROWS][COLS] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte rowPins[ROWS] = {9, 8, 7, 6}; // Connect to the row pinouts
byte colPins[COLS] = {5, 4, 3, 2}; // Connect to the column pinouts

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

void setup() {
  Serial.begin(9600);
}

void loop() {
  char key = keypad.getKey();
  if (key) {
    Serial.print("Key Pressed: ");
    Serial.println(key);
  }
}

`
]
  return (
    <>
      <div className="h-fit w-full p-5 bg-cover rounded-xl leading-8 text-justify break-words 
          md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:bg-fixed">

       
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />

       
        <h1 className="text-3xl font-bold mb-6 text-center">{data.mainTitle}</h1>
 
        {data.title1 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title1}</h2>
            <p>{data.para1}</p>
          </section>
        )}

        
        {data.arrangement && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">Arrangement</h2>
            <pre className="whitespace-pre-wrap">{data.arrangement}</pre>
          </section>
        )}

        {data.title3 && data.types && data.types.length > 0 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title3}</h2>
            {data.types.map((type, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{type.name}</h3>
                <ul className="list-disc pl-6">
                  {type.operation.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

       
        {data.title4 && data.configurations && data.configurations.length > 0 && (
  <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
    <h2 className="text-xl font-bold mb-6">{data.title4}</h2>
    {data.configurations.map((config, index) => (
      <div key={index} className="mb-6">
        {config.name && <h3 className="text-lg font-semibold">{config.name}</h3>}
        {Array.isArray(config.operation) && config.operation.length > 0 && (
          <ul className="list-disc pl-6">
            {config.operation.map((op, idx) => (
              <li key={idx}>{op}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </section>
)}


       
        {data.title5 && data.para2 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title5}</h2>
            <p>{data.para2}</p>
          </section>
        )}

      
        {data.algorithms && data.algorithms.length > 0 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">Algorithm</h2>
            <ol className="list-decimal pl-6">
              {data.algorithms.map((algo, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">
                    {algo[`step${index + 1}`]}
                  </h3>
                  <ul className="list-disc pl-6">
                    {algo.operation.map((op, i) => (
                      <li key={i}>{op}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        )}

        
      {  data.ExperimentId == '15' || data.ExperimentId == '17' || <CodeBox code={codeArr[0]}/>} 

        
        {data.title11 && data.para3 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title11}</h2>
            <p>{data.para3}</p>
          </section>
        )}

       
        {data.title8 && data.applications && data.applications.length > 0 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title8}</h2>
            <ul className="list-disc pl-6">
              {data.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </section>
        )}

       
        {data.conclusion && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">Conclusion</h2>
            <p>{data.conclusion}</p>
          </section>
        )}
      </div>

      
      <Side />
    </>
  );
}
