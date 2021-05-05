class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createButton('Check');
        this.access2 = createButton('Check');
        this.access3 = createButton('Check');
        this.inp1 = createInput('Type')
        this.inp2 = createInput('Type')
        this.inp3 = createInput('Type')

    }

    display(){

        // Add code to make the buttons function as expected

        this.inp1.position(100, 90)
        this.inp2.position(700,190)
        this.inp3.position(100, 290)
        this.access1.position(100, 120)
        this.access2.position(700, 220)
        this.access3.position(100, 320)
        this.access1.mousePressed(() => {
            if(system.authenticate(accessCode1, this.inp1.value())){
                this.access1.hide()
                this.inp1.hide()
                score++;
            }
        })
        this.access2.mousePressed(() => {
            if(system.authenticate(accessCode2, this.inp2.value())){
                this.access2.hide()
                this.inp2.hide()
                score++;
            }
        })
        this.access3.mousePressed(() => {
            if(system.authenticate(accessCode3, this.inp3.value())){
                this.access3.hide()
                this.inp3.hide()
                score++;
            }
        })

    }
}