import { LightningElement, track } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    fullname = 'Shubham Rajput';
    responsibilityTitle = 'Software Development Engineer';

    /*@track*/ address = {
        city:'Mumbai',
        pin:'425001',
        country:'India'
    }

    onChangeHandler(event){
        this.responsibilityTitle = event.target.value;
    }

    onTrackHandler(event){
        const field = event.target.name;
        if(field === 'city'){
            this.address = {...this.address, "city":event.target.value}
        }
        else if(field === 'pin'){
            this.address = {...this.address, "pin":event.target.value}
        }
        else if(field === 'country'){
            this.address = {...this.address, "country":event.target.value}
        }
        console.log('======================================================');
        console.log('address obj => '+this.address.city);
        console.log('address obj => '+this.address.pin);
        console.log('address obj => '+this.address.country);
        console.log('======================================================'); 
    }
}