let res=[

    `import RPi.GPIO as GPIO
import time

LED_PIN = 17  # GPIO pin connected to the LED

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

try:
    while True:
        # Turn on the LED
        GPIO.output(LED_PIN, GPIO.HIGH)
        time.sleep(1)  # Wait for 1 second

        # Turn off the LED
        GPIO.output(LED_PIN, GPIO.LOW)
        time.sleep(1)  # Wait for 1 second

except KeyboardInterrupt:
    # Clean up GPIO on keyboard interrupt (Ctrl+C)
    GPIO.cleanup()
`,
  
  `import RPi.GPIO as GPIO
import time

# Define LCD pin mapping (adjust based on your LCD module)
LCD_RS = 25
LCD_E = 24
LCD_D4 = 23
LCD_D5 = 17
LCD_D6 = 18
LCD_D7 = 22

# Define LCD dimensions (number of columns and rows)
LCD_COLUMNS = 16
LCD_ROWS = 2

# Initialize GPIO and LCD
def lcd_init():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(LCD_RS, GPIO.OUT)
    GPIO.setup(LCD_E, GPIO.OUT)
    GPIO.setup(LCD_D4, GPIO.OUT)
    GPIO.setup(LCD_D5, GPIO.OUT)
    GPIO.setup(LCD_D6, GPIO.OUT)
    GPIO.setup(LCD_D7, GPIO.OUT)

    # Initialize LCD to 4-bit mode and clear the display
    lcd_send_command(0x33)  # Initialize
    lcd_send_command(0x32)  # Set to 4-bit mode
    lcd_send_command(0x28)  # 2 lines, 5x8 font
    lcd_send_command(0x0C)  # Display on, cursor off, blink off
    lcd_send_command(0x01)  # Clear display
    time.sleep(0.1)

# Send a command to the LCD
def lcd_send_command(command):
    GPIO.output(LCD_RS, GPIO.LOW)  # Set RS to 0 for command mode
    lcd_write(command >> 4)  # Send the higher nibble
    lcd_write(command & 0x0F)  # Send the lower nibble

# Write data to the LCD (4-bit mode)
def lcd_write(data):
    GPIO.output(LCD_RS, GPIO.HIGH)  # Set RS to 1 for data mode
    GPIO.output(LCD_D4, GPIO.HIGH if (data & 0x01) else GPIO.LOW)
    GPIO.output(LCD_D5, GPIO.HIGH if (data & 0x02) else GPIO.LOW)
    GPIO.output(LCD_D6, GPIO.HIGH if (data & 0x04) else GPIO.LOW)
    GPIO.output(LCD_D7, GPIO.HIGH if (data & 0x08) else GPIO.LOW)
    lcd_toggle_enable()

    GPIO.output(LCD_D4, GPIO.HIGH if (data & 0x10) else GPIO.LOW)
    GPIO.output(LCD_D5, GPIO.HIGH if (data & 0x20) else GPIO.LOW)
    GPIO.output(LCD_D6, GPIO.HIGH if (data & 0x40) else GPIO.LOW)
    GPIO.output(LCD_D7, GPIO.HIGH if (data & 0x80) else GPIO.LOW)
    lcd_toggle_enable()

# Toggle the enable pin to send data to the LCD
def lcd_toggle_enable():
    GPIO.output(LCD_E, GPIO.HIGH)
    time.sleep(0.0005)
    GPIO.output(LCD_E, GPIO.LOW)
    time.sleep(0.0005)

# Display text on the LCD
def lcd_display_text(text):
    lcd_send_command(0x01)  # Clear display
    time.sleep(0.1)
    
    for char in text:
        lcd_write(ord(char))  # Write each character to the LCD

# Main program
try:
    lcd_init()  # Initialize the LCD
    lcd_display_text("Hello, Raspberry Pi!")  # Display text on LCD
    time.sleep(2)  # Wait for 2 seconds
    lcd_display_text("LCD Display Test")  # Display more text
    while True:
        pass  # Keep the script running to keep the LCD on

except KeyboardInterrupt:
    GPIO.cleanup()  # Clean up GPIO settings on Ctrl+C
`,

    `
import RPi.GPIO as GPIO
import time

# Define GPIO pins connected to L293D motor driver
MOTOR_ENA = 17
MOTOR_IN1 = 18
MOTOR_IN2 = 27

# Setup GPIO mode and pins
GPIO.setmode(GPIO.BCM)
GPIO.setup(MOTOR_ENA, GPIO.OUT)
GPIO.setup(MOTOR_IN1, GPIO.OUT)
GPIO.setup(MOTOR_IN2, GPIO.OUT)

# Function to control motor direction and speed
def control_motor(direction, speed):
    # Set direction of the motor
    if direction == 'forward':
        GPIO.output(MOTOR_IN1, GPIO.HIGH)
        GPIO.output(MOTOR_IN2, GPIO.LOW)
    elif direction == 'backward':
        GPIO.output(MOTOR_IN1, GPIO.LOW)
        GPIO.output(MOTOR_IN2, GPIO.HIGH)
    else:
        print("Invalid direction")
        return
    
    # Set PWM for motor speed (0-100)
    motor_pwm = GPIO.PWM(MOTOR_ENA, 1000)  # Frequency = 1000 Hz
    motor_pwm.start(speed)  # Start PWM with specified duty cycle

# Main program loop
try:
    while True:
        # Control motor forward with 50% speed
        print("Motor Forward")
        control_motor('forward', 50)
        time.sleep(2)
        
        # Control motor backward with 75% speed
        print("Motor Backward")
        control_motor('backward', 75)
        time.sleep(2)

except KeyboardInterrupt:
    GPIO.cleanup()  # Clean up GPIO pins on exit

                        
    
    `,
    `
  from machine import Pin
from time import sleep
from dht import DHT22  # Use DHT11 if you're using a DHT11 sensor

# Create a DHT object, change to DHT11 if you're using DHT11 sensor
dht = DHT22(Pin(15))

# Continuously get sensor readings while the board has power
while True:
    # Get sensor readings
    dht.measure()
    temp = dht.temperature()  # Get temperature in Celsius
    hum = dht.humidity()     # Get humidity percentage

    # Display the values to the console
    print(f"Temperature: {temp}°C   Humidity: {hum}%")

    # Delay of 2 seconds, because DHT22 takes a reading once every 2 seconds
    sleep(2)

    
    `,
    `
   import RPi.GPIO as GPIO
import time

# Set up GPIO mode
GPIO.setmode(GPIO.BCM)

# Define the pins
TRIG_PIN = 23
ECHO_PIN = 24

# Set up the pins
GPIO.setup(TRIG_PIN, GPIO.OUT)
GPIO.setup(ECHO_PIN, GPIO.IN)

def measure_distance():
    # Send a pulse to the TRIG pin to start the measurement
    GPIO.output(TRIG_PIN, GPIO.HIGH)
    time.sleep(0.00001)  # Pulse duration
    GPIO.output(TRIG_PIN, GPIO.LOW)

    # Record the start and stop times
    start_time = time.time()
    stop_time = time.time()

    # Wait for the echo to start (rising edge)
    while GPIO.input(ECHO_PIN) == 0:
        start_time = time.time()

    # Wait for the echo to stop (falling edge)
    while GPIO.input(ECHO_PIN) == 1:
        stop_time = time.time()

    # Calculate the time taken for the round trip
    elapsed_time = stop_time - start_time

    # Calculate the distance in cm (speed of sound is 34300 cm/s)
    distance = (elapsed_time * 34300) / 2

    return distance

try:
    while True:
        dist = measure_distance()
        print(f"Distance: {dist:.2f} cm")  # f-string for proper formatting
        time.sleep(1)  # Wait for 1 second before the next measurement

except KeyboardInterrupt:
    print("Measurement stopped by user")
    GPIO.cleanup()  # Clean up the GPIO settings before exiting

    `,
    `
    import RPi.GPIO as GPIO
import time

# Define GPIO pin number for Pulse Sensor
PULSE_SENSOR_PIN = 18

# Setup GPIO
def setup_gpio():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(PULSE_SENSOR_PIN, GPIO.IN)

# Function to calculate the pulse rate (beats per minute)
def get_pulse_rate():
    pulse_count = 0
    last_state = GPIO.input(PULSE_SENSOR_PIN)
    start_time = time.time()

    while True:
        current_state = GPIO.input(PULSE_SENSOR_PIN)
        
        if current_state != last_state:  # Pulse detected
            pulse_count += 1
            last_state = current_state

        # Calculate elapsed time
        elapsed_time = time.time() - start_time

        if elapsed_time >= 10:  # Count pulses for 10 seconds
            pulse_rate = (pulse_count / elapsed_time) * 60  # Convert to beats per minute
            return pulse_rate

# Main function to run the pulse rate measurement
try:
    setup_gpio()
    print("Pulse Sensor Initialized. Measure your pulse...")

    while True:
        pulse_rate = get_pulse_rate()
        print(f"Pulse Rate: {pulse_rate:.2f} BPM")  # Display pulse rate with 2 decimal places
        time.sleep(1)  # Pause for a second before the next reading

except KeyboardInterrupt:
    print("Program interrupted. Cleaning up...")
    GPIO.cleanup()  # Clean up GPIO settings before exiting
    `,
    `
   import RPi.GPIO as GPIO
import time

# Use BCM GPIO numbering
GPIO.setmode(GPIO.BCM)

# Set up the GPIO pin for the button (GPIO 17)
button_pin = 17
GPIO.setup(button_pin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

try:
    while True:
        # Read the state of the button
        if GPIO.input(button_pin) == GPIO.HIGH:
            print("Button Pressed")
        else:
            print("Button Released")

        time.sleep(0.1)  # Delay to debounce the button

except KeyboardInterrupt:
    # Clean up GPIO settings before exiting
    print("Program interrupted. Cleaning up GPIO.")
    GPIO.cleanup()
 `,
    `
import RPi.GPIO as GPIO
import time

# Set up GPIO
GPIO.setmode(GPIO.BCM)

# The pin where the PIR sensor is connected
PIR_PIN = 17
GPIO.setup(PIR_PIN, GPIO.IN)

# Callback function to execute when motion is detected
def motion_detected(channel):
    print("Motion detected!")

# Attach event to pin
GPIO.add_event_detect(PIR_PIN, GPIO.RISING, callback=motion_detected)

try:
    print("PIR Module Test (CTRL+C to exit)")
    time.sleep(2)  # Give PIR sensor time to initialize
    print("Ready")

    while True:
        # Infinite loop, can be adjusted
        time.sleep(1)

except KeyboardInterrupt:
    print("Quit")
    GPIO.cleanup()  # Clean up GPIO on CTRL+C exit

    `
]
let esp=[
    `
   #include <DHT.h>   // Include the DHT sensor library

// Define the pin and type of the DHT sensor
#define DHTPIN 4     // Pin where the DHT sensor is connected
#define DHTTYPE DHT22  // DHT 22 (AM2302), change this to DHT11 or DHT21 if you're using those

// Initialize the DHT sensor
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);  // Start the serial communication
  Serial.println(F("DHTxx test!"));
  dht.begin();  // Initialize the DHT sensor
}

void loop() {
  // Wait a few seconds between measurements
  delay(2000);  // Delay to allow the sensor time to stabilize
  
  // Reading humidity and temperature (Celsius by default)
  float h = dht.readHumidity();  
  float t = dht.readTemperature();  // Temperature in Celsius
  float f = dht.readTemperature(true);  // Temperature in Fahrenheit

  // Check if any reads failed and exit early if so
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  // Compute heat index in Fahrenheit and Celsius
  float hif = dht.computeHeatIndex(f, h);  // Heat index in Fahrenheit
  float hic = dht.computeHeatIndex(t, h, false);  // Heat index in Celsius

  // Output the sensor readings to the serial monitor
  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("°C "));
  Serial.print(f);
  Serial.print(F("°F  Heat index: "));
  Serial.print(hic);
  Serial.print(F("°C "));
  Serial.print(hif);
  Serial.println(F("°F"));
}
   `
    ,
    `
    const int trigPin = 5;      // Trigger pin of the ultrasonic sensor
const int echoPin = 18;     // Echo pin of the ultrasonic sensor

// Define sound speed in cm/us
#define SOUND_SPEED 0.034  // Speed of sound in cm/us (at 20°C)
#define CM_TO_INCH 0.393701  // Conversion factor from cm to inches

long duration;              // Variable to store the duration of the pulse
float distanceCm;           // Variable to store the calculated distance in cm
float distanceInch;         // Variable to store the calculated distance in inches

void setup() {
  Serial.begin(115200);      // Start the serial communication at 115200 baud rate

  pinMode(trigPin, OUTPUT);  // Set the trigPin as an Output
  pinMode(echoPin, INPUT);   // Set the echoPin as an Input
}

void loop() {
  // Clears the trigPin to ensure the pulse is clean
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);  // Small delay for stability

  // Sets the trigPin on HIGH state for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);  // Pulse width is 10 microseconds
  digitalWrite(trigPin, LOW);

  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);

  // Calculate the distance in centimeters using the sound speed
  distanceCm = duration * SOUND_SPEED / 2;

  // Convert the distance to inches
  distanceInch = distanceCm * CM_TO_INCH;

  // Print the distance in the Serial Monitor
  Serial.print("Distance (cm): ");
  Serial.println(distanceCm);   // Print distance in centimeters

  Serial.print("Distance (inch): ");
  Serial.println(distanceInch);  // Print distance in inches

  delay(1000);  // Wait for 1 second before taking the next measurement
}
 `,
    `
   #define DO_PIN 13  // ESP32's GPIO13 pin connected to DO pin of the flame sensor

void setup() {
  // Initialize serial communication
  Serial.begin(9600);
  
  // Initialize the ESP32's pin as an input
  pinMode(DO_PIN, INPUT);
}

void loop() {
  // Read the state of the flame sensor
  int flame_state = digitalRead(DO_PIN);
  
  // Check if the flame sensor is triggered
  if (flame_state == HIGH) {
    // No flame detected (sensor output HIGH means no flame)
    Serial.println("No flame detected => The fire is NOT detected");
  } else {
    // Flame detected (sensor output LOW means flame detected)
    Serial.println("Flame detected => The fire is detected");
  }

  delay(1000);  // Wait for 1 second before checking again
}
 `,
    `
  int led = 36;            // Define pin for the LED
int sound_digital = 2;   // Define pin for the digital sound sensor
int sound_analog = 4;    // Define pin for the analog sound sensor

void setup() {
  // Initialize serial communication
  Serial.begin(9600);

  // Initialize LED pin as an output
  pinMode(led, OUTPUT);

  // Initialize sound sensor pins
  pinMode(sound_digital, INPUT);  // Digital sound sensor pin
}

void loop() {
  // Read the digital value from the sound sensor
  int val_digital = digitalRead(sound_digital);

  // Read the analog value from the sound sensor
  int val_analog = analogRead(sound_analog);

  // Print the analog and digital sensor values to the serial monitor
  Serial.print(val_analog);
  Serial.print("\t");
  Serial.println(val_digital);

  // If sound is detected (digital pin is HIGH), turn on the LED
  if (val_digital == HIGH) {
    digitalWrite(led, HIGH);  // Turn on the LED
    delay(3000);              // Keep the LED on for 3 seconds
    digitalWrite(led, LOW);   // Turn off the LED after 3 seconds
  }

  delay(100);  // Small delay to avoid overloading the serial output
}

    `,
    `
#define outputB  35    // DATA signal pin (connected to output B of the encoder)
#define outputA  34    // CLOCK signal pin (connected to output A of the encoder)

int counter = 0;       // To track the encoder position
int aState;            // Current state of the A signal
int aLastState;        // Previous state of the A signal

void setup() {
  // Set outputA and outputB as input pins
  pinMode(outputA, INPUT);
  pinMode(outputB, INPUT);

  // Initialize serial communication
  Serial.begin(115200);

  // Read the initial state of outputA
  aLastState = digitalRead(outputA);
}

void loop() {
  // Read the current state of outputA
  aState = digitalRead(outputA);

  // If the previous and current state of outputA are different, a pulse has occurred
  if (aState != aLastState) {
    // If the outputB state is different from outputA state, the encoder is rotating clockwise
    if (digitalRead(outputB) != aState) {
      counter++;    // Increase counter for clockwise rotation
    } else {
      counter--;    // Decrease counter for counter-clockwise rotation
    }

    // Print the current position
    Serial.print("Position: ");
    Serial.println(counter);
  }

  // Update the previous state of outputA with the current state
  aLastState = aState;
}

    `,
    `
    #include <IRremote.h>  
    int RECV_PIN = 15;  
    IRrecvirrecv(RECV_PIN);  
    decode_results results;  
    void setup()
     { Serial.begin(9600); irrecv.enableIRIn(); 
      // Start the receiver }  
      void loop() { if (irrecv.decode(&results)) 
      { Serial.println(results.value, HEX); irrecv.resume(); } }
    `,
    `
 #include <ESP32Servo.h>  // Include the ESP32Servo library

Servo myservo;  // Create a servo object to control a servo

int pos = 0;     // Variable to store the servo position
int servoPin = 13;  // Define the servo pin (pin 13)

void setup() {
  myservo.setPeriodHertz(50);  // Set the servo frequency to 50 Hz (standard for servos)
  myservo.attach(servoPin, 500, 2400);  // Attach the servo on pin 13 with pulse width from 500us to 2400us
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (pos = 0; pos <= 180; pos += 1) {  // Move from 0 to 180 degrees in steps of 1 degree
    myservo.write(pos);  // Move servo to position 'pos'
    delay(15);            // Wait 15ms to allow the servo to reach the position
  }

  // Sweep back from 180 to 0 degrees
  for (pos = 180; pos >= 0; pos -= 1) {  // Move from 180 to 0 degrees in steps of 1 degree
    myservo.write(pos);  // Move servo to position 'pos'
    delay(15);            // Wait 15ms to allow the servo to reach the position
  }
}
   `
]
  
let ard=[
`
 void setup()
     { 
    pinMode(13, OUTPUT);
     // Set pin 13 as an output 
     } 
     void loop() 
     {
      digitalWrite(13, HIGH); 
      delay(1000);          
      digitalWrite(13, LOW);
      delay(1000);      
                  
      } 

`,
`
   int A= 3; 
   int B= 4; 
   int C= 5;
   int D= 6; 
   int E= 7; 
   int F= 8; 
   int G= 9; 
   int X= 13; 
   int Y= 12;  
   int Z= 11; 
   void setup() 
   { 
    pinMode(A,OUTPUT); 
    pinMode(B,OUTPUT); 
    pinMode(C,OUTPUT); 
    pinMode(D,OUTPUT); 
    pinMode(E,OUTPUT); 
    pinMode(F,OUTPUT);
    pinMode(G,OUTPUT); 
    pinMode(X,OUTPUT); 
    pinMode(Y,OUTPUT); 
    pinMode(Z,OUTPUT); 
      } 
    void loop()
    { 
      digitalWrite(A,HIGH); 
      digitalWrite(B,HIGH);
      digitalWrite(C,HIGH);
      digitalWrite(D,HIGH);
      digitalWrite(E,HIGH);
      digitalWrite(F,HIGH); 
      digitalWrite(G,LOW);
      digitalWrite(X,HIGH);
      digitalWrite(Y,LOW); 
      digitalWrite(Z,LOW);  
      delay(2000); 
      digitalWrite(A,LOW); 
      digitalWrite(B,HIGH);
      digitalWrite(C,HIGH);
      digitalWrite(D,LOW);
      digitalWrite(E,LOW); 
      digitalWrite(F,LOW); 
      digitalWrite(G,LOW); 
      digitalWrite(X,HIGH); 
      digitalWrite(Y,LOW); 
      digitalWrite(Z,LOW); 
      delay(2000); 
      digitalWrite(A,HIGH); 
      digitalWrite(B,HIGH); 
      digitalWrite(C,LOW); 
      digitalWrite(D,HIGH); 
      digitalWrite(E,HIGH); 
      digitalWrite(F,LOW); 
      digitalWrite(G,HIGH); 
      digitalWrite(X,HIGH); 
      digitalWrite(Y,LOW); 
      digitalWrite(Z,LOW); 
      delay(2000); 
      digitalWrite(A,HIGH); 
      digitalWrite(B,HIGH); 
      digitalWrite(C,HIGH); 
      digitalWrite(D,HIGH); 
      digitalWrite(E,LOW); 
      digitalWrite(F,LOW); 
      digitalWrite(G,HIGH); 
      digitalWrite(X,LOW); 
      digitalWrite(Y,HIGH); 
      digitalWrite(Z,LOW); 
      delay(2000); 
      digitalWrite(A,LOW); 
      digitalWrite(B,HIGH); 
      digitalWrite(C,HIGH); 
      digitalWrite(D,LOW); 
      digitalWrite(E,LOW); 
      digitalWrite(F,HIGH); 
      digitalWrite(G,HIGH); 
      digitalWrite(X,LOW); 
      digitalWrite(Y,HIGH); 
      digitalWrite(Z,LOW); 
      delay(2000); 
      digitalWrite(A,HIGH); 
      digitalWrite(B,LOW); 
      digitalWrite(C,HIGH); 
        
      digitalWrite(D,HIGH); 
      digitalWrite(E,LOW);
      digitalWrite(F,HIGH); 
      digitalWrite(G,HIGH); 
      digitalWrite(X,LOW); 
      digitalWrite(Y,HIGH); 
      digitalWrite(Z,LOW); 
      delay(2000); 
      digitalWrite(A,HIGH); 
      digitalWrite(B,LOW); 
      digitalWrite(C,HIGH); 
      digitalWrite(D,HIGH); 
      digitalWrite(E,HIGH); 
      digitalWrite(F,HIGH); 
      digitalWrite(G,HIGH); 
      digitalWrite(X,LOW); 
      digitalWrite(Y,LOW); 
      digitalWrite(Z,HIGH); 
      delay(2000); 
      digitalWrite(A,HIGH); 
      digitalWrite(B,HIGH); 
      digitalWrite(C,HIGH); 
      digitalWrite(D,LOW); 
      digitalWrite(E,LOW); 
      digitalWrite(F,LOW); 
      digitalWrite(G,LOW); 
         
      digitalWrite(X,LOW); 
      digitalWrite(Y,LOW); 
      digitalWrite(Z,HIGH); 
      delay(2000); 
      digitalWrite(A,HIGH); 
      digitalWrite(B,HIGH); 
      digitalWrite(C,HIGH); 
      digitalWrite(D,HIGH); 
      digitalWrite(E,HIGH); 
      digitalWrite(F,HIGH); 
      digitalWrite(G,HIGH); 
      digitalWrite(X,LOW); 
      digitalWrite(Y,LOW); 
      digitalWrite(Z,HIGH); 
      delay(2000); 
      digitalWrite(A,HIGH); 
      digitalWrite(B,HIGH); 
      digitalWrite(C,HIGH); 
      digitalWrite(D,HIGH);
      digitalWrite(E,LOW); 
      digitalWrite(F,HIGH); 
      digitalWrite(G,HIGH); 
      digitalWrite(X,LOW); 
      digitalWrite(Y,LOW); 
      digitalWrite(Z,HIGH);
      delay(2000); 
           }

`,
`
int A=3;
int B=4;
int C=5;
int D=6;
int E=7;
int F=8;
int G=9;
int X=10;
int Y=11; 
int Z=12;   
void setup()
 {
          pinMode(A, OUTPUT);
          pinMode(B, OUTPUT);
          pinMode(C, OUTPUT); 
          pinMode(D, OUTPUT); 
          pinMode(E, OUTPUT); 
          pinMode(F, OUTPUT); 
          pinMode(G, OUTPUT); 
          pinMode(X, OUTPUT); 
          pinMode(Y, OUTPUT); 
          pinMode(Z, OUTPUT); 
          } 
void loop() 
{ 

          digitalWrite(A, HIGH); 
          digitalWrite(B ,HIGH); 
          digitalWrite(C, HIGH); 
          digitalWrite(D, HIGH); 
          digitalWrite(E, HIGH); 
          digitalWrite(F, HIGH); 
          digitalWrite(G, LOW); 
          delay(1000); 
          digitalWrite(A, LOW);
           digitalWrite(B ,HIGH); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, LOW); 
           digitalWrite(E, LOW); 
           digitalWrite(F, LOW); 
           digitalWrite(G, LOW); 
           delay(1000); 
           digitalWrite(A, HIGH); 
           digitalWrite(B ,HIGH); 
           digitalWrite(C, LOW); 
           digitalWrite(D, HIGH);
           digitalWrite(E, HIGH);
           digitalWrite(F, LOW); 
           digitalWrite(G, HIGH); 
           delay(1000); 
           digitalWrite(A, HIGH); 
           digitalWrite(B ,HIGH); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, HIGH); 
           digitalWrite(E, LOW); 
           digitalWrite(F, LOW); 
           digitalWrite(G, HIGH); 
           delay(1000); 
           digitalWrite(A, LOW); 
           digitalWrite(B ,HIGH); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, LOW); 
           digitalWrite(E, LOW); 
           digitalWrite(F, HIGH); 
           digitalWrite(G,HIGH); 
           delay(1000); 
           digitalWrite(A, HIGH); 
           digitalWrite(B ,LOW); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, HIGH); 
           digitalWrite(E, LOW); 
           digitalWrite(F, HIGH); 
           digitalWrite(G, HIGH); 
           delay(1000); 
           digitalWrite(A, LOW); 
           digitalWrite(B ,LOW); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, HIGH);
           digitalWrite(E, HIGH);
           digitalWrite(F, HIGH); 
           digitalWrite(G, HIGH); 
           delay(1000); 
           digitalWrite(A, HIGH); 
           digitalWrite(B ,HIGH); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, LOW); 
           digitalWrite(E, LOW); 
           digitalWrite(F, LOW); 
           digitalWrite(G, LOW); 
           delay(1000); 
           digitalWrite(A, HIGH); 
           digitalWrite(B ,HIGH); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, HIGH); 
           digitalWrite(E, HIGH); 
           digitalWrite(F, HIGH); 
           digitalWrite(G, HIGH); 
           delay(1000); 
           digitalWrite(A, HIGH); 
           digitalWrite(B ,HIGH);
           digitalWrite(C, HIGH); 
           digitalWrite(D, LOW); 
           digitalWrite(E, LOW); 
           digitalWrite(F, HIGH);
           digitalWrite(G, HIGH);
           delay(1000);           
           
           }
`,
`
 int PIR PIN = 4;
 void setup() 
{ 

       serial.begin(9600); 
       pinMode(PIR PIN, INPUT); 
       delay(1000); 
      
} 
Void loop()
{ 
       int motionDetected = digitalRead(PIR PIN); 
        if (motionDetected = = HIGH) 
         {

            serial.println(“Motion detected!”);   
         }
          delay(500); 
             

`,
`
 int sensor_pin=13;
int sensor_state=1;
void setup()
{ 

        pinMode(13,INPUT);
        Serial.begin(9600);

} 
void loop()
{  
         Serial.print("Soil Moisture Level: "); 
         sensor_state = digitalRead(sensor_pin); 
         if (sensor_state == 1) 
         { 
            Serial.println("Wet");
          } 
         else 
         { 
            Serial.println("Dry"); 
           } 
          delay(200); 
}
`,
`
// Define pin connections
const int trigPin = 9; 
const int echoPin = 10; 
// Define variables long duration; int distance;  
void setup()
{ 
         // Initialize serial communication Serial.begin(9600);
        // Define pin modes 
        pinMode(trigPin, OUTPUT); 
        pinMode(echoPin, INPUT);
}  
void loop()
{   
         digitalWrite(trigPin, LOW); delayMicroseconds(2);   
          
         digitalWrite(trigPin, HIGH); 
         delayMicroseconds(10);
         digitalWrite(trigPin, LOW);   
          // Measure the duration of the echo pulse   
         duration = pulse In(echo Pin, HIGH);    

          // Calculate distance in cm (speed of sound is 343 m/s) 
        distance = duration * 0.034 / 2;  
       // Print distance to the serial monitor Serial.print("Distance: "); 
        Serial.print(distance); Serial.println(" cm");  
       // Delay before next reading delay(1000);
}


  
`,
`
 #include <LiquidCrystal.h> 
  LiquidCrystal lcd(12,11,5,4,3,2); 
  void setup()
{ 
    lcd.begin(16,2); 
    lcd.print("ANJALI KUMARI");  
} 
void loop()
{
}
 
`,
`
const int motorPin = 9; 
void setup() 
{ 
      pinMode(motorPin, OUTPUT); 
} 
void loop() 
{
      digitalWrite(motorPin, HIGH);
      delay(2000); 
      digitalWrite(motorPin, LOW); 
      delay(1000);
      digitalWrite(motorPin, HIGH); 
      delay(2000);
      digitalWrite(motorPin, LOW); 
      delay(1000); 
}
 
`,
`
# include <Servo.h>; 
    Servo Motor; 
void setup()
{   
    Motor.attach(13);
} 
void loop ()
{   
    Motor.write(0);   
    delay(1000);   
    Motor.write(180);  
    delay(1000);   
}
  
`,
`

const int dirPin1 = 13;
void setup()
{ 
       pinMode(dirPin1, OUTPUT);
}
void loop() 
{ 
         digitalWrite(dirPin1, HIGH);
         digitalWrite(dirPin1, LOW);
}
 
`,
`
#include <Wire.h>                 // I2C library
#include <Adafruit_GFX.h>          // Core graphics library
#include <Adafruit_SSD1306.h>      // OLED display library

// OLED display dimensions (for 0.96" 128x64 OLED)
#define SCREEN_WIDTH 128          // OLED display width, in pixels
#define SCREEN_HEIGHT 64          // OLED display height, in pixels
#define OLED_RESET    -1          // Reset pin (or use -1 if not used)

// Create an instance of the SSD1306 display
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  // Start serial communication for debugging (optional)
  Serial.begin(9600);

  // Initialize OLED display
  if (!display.begin(SSD1306_I2C_ADDRESS, OLED_RESET)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;);  // Infinite loop to stop execution if initialization fails
  }

  // Clear the buffer
  display.clearDisplay();

  // Display text on the OLED
  display.setTextSize(1);        // Set text size to 1 (small)
  display.setTextColor(SSD1306_WHITE);  // Set text color to white
  display.setCursor(0,0);        // Set the cursor to the top-left corner
  display.println(F("Hello, World!"));  // Print "Hello, World!" on the display

  display.setTextSize(2);        // Set text size to 2 (larger)
  display.setCursor(0, 20);      // Move cursor down
  display.println(F("Arduino")); // Print "Arduino" on the display

  display.display();             // Display the contents of the buffer
}

void loop() {
  // Optionally, you can clear the display and add more dynamic content here
}

`,
`
#define LED_PIN 13     // Pin where the LED is connected
#define BUTTON_PIN 2   // Pin where the push button is connected

void setup() {
  // Initialize the LED pin as an output:
  pinMode(LED_PIN, OUTPUT);

  // Initialize the BUTTON_PIN as an input with an internal pull-up resistor:
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  // Read the state of the push button
  int buttonState = digitalRead(BUTTON_PIN);

  // Check if the button is pressed
  if (buttonState == LOW) {  // Button pressed (since we are using INPUT_PULLUP)
    digitalWrite(LED_PIN, HIGH);  // Turn the LED on
  } else {
    digitalWrite(LED_PIN, LOW);   // Turn the LED off
  }
}

`,



]
export {res,esp,ard}