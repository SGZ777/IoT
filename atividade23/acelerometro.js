I2C1.setup()

let mpu = require("MPU6050").connect(I2C1)

setInterval(function() {
    let acc = mpu.getGravity()
    let gyro = mpu.getDegreesPerSecond()
    let temp = mpu.getTemperature()

    console.log("Aceleração X:" + acc[0].toFixed(2) + "\t Aceleração Y:" + acc[1].toFixed(2) + "\t Aceleração Z:" + acc[2].toFixed(2))
    console.log("Giro X:" + gyro[0].toFixed(2) + "\t Giro Y:" + gyro[1].toFixed(2) + "\t Giro Z:" + gyro[2].toFixed(2))
    console.log("Temperatura: " + temp.toFixed(2) + " °C")
}, 500)
