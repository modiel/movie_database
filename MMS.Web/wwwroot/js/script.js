import  { html, css, LitElement } from 'https://unpkg.com/lit-element@latest/lit-element.js?module'

class MovRating extends LitElement {
    static get properties() {  
        return {
            rate: { type: Number }
        }
    }
    constructor() {
        super()
        this.rate = 0
    }

    static get styles() {
        return css`        
            .stars-container {
                position: relative;
                display: inline-block;
                color: transparent;
                font-size: 20px;
            }

            .stars-container:before{
                position: absolute;
                top: 0;
                left: 0;
                content: '★★★★★';
                color:lightgray;
            }

            .stars-container:after {
                position: absolute;
                top: 0;
                left: 0;
                content: '★★★★★';
                color: gold;
                overflow: hidden;
            }

            .stars-0:after { width: 0%; }
            .stars-1:after { width: 10%; }
            .stars-2:after { width: 20%; }
            .stars-3:after { width: 30%; }
            .stars-4:after { width: 40%; }
            .stars-5:after { width: 50%; }
            .stars-6:after { width: 60%; }
            .stars-7:after { width: 70%; }
            .stars-8:after { width: 80%; }
            .stars-9:after { width: 90%; }
            .stars-10:after { width: 100%;}
        `
    }

    render() {
        return html`
        <h3>Rating: ${this.rate}</h3>
        <div>
            <span class="stars-container stars-${this.rate}">★★★★★</span> /   
            <span class="badge badge-primary">${this.rate}</span>    
        </div>
        `
    }
}
customElements.define('mov-rating', MovRating)