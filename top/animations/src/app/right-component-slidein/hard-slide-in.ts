import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export function HardSlideIn(duration: number = 300) {
  return trigger('hardSlideIn', [
    state('out', style({
      transform: 'translateX(100%)',
    })),
    state('in', style({
      transform: 'translateX(-33px)',
    })),
    state('out', style({
      transform: 'translateX(100%)',
    })),
    transition('* => in', animate('1500ms ease-in', keyframes([
      style({ transform: 'translateX(100%)', offset: 0 }),
      style({ transform: 'translateX(-100px)', offset: 0.4 }),
      style({ transform: 'translateX(50px)', offset: 0.6 }),
      style({ transform: 'translateX(-33px)', offset: 1 })
    ]))),
    transition('in => out', animate('600ms ease-in'))
  ]);
}

export function ContactInner(duration: number = 300) {
  return trigger('contactInner', [
    state('out', style({
      transform: 'perspective( 400px ) rotateY(0deg)',
    })),
    state('in', style({
      transform: 'perspective( 400px ) rotateY(5deg)',
    })),
    state('out', style({
      transform: 'perspective( 400px ) rotateY(0deg)',
    })),
    transition('* => in', animate('1000ms ease-in')),
    transition('in => out', animate('600ms ease-in'))
  ]);
}

// DOC 
// 
// CSS
// 
// #contact-inner
//    background-color: #FFFFFF
//    position: absolute
//    left: 0
//    top: 0
//    bottom: 0
//    right: 0
//    transform-origin: 0
// #slide-in
// position: fixed
// background-color: #fff000
// height: 50vh
// width: 700px
// right: 0
// top: 20vh
// #contact-card
//     height: 100%
//     width: 100%
//     #contact-form
//         display: flex
//         flex-direction: column
// 
// 
// HTML
// 
// <div [@hardSlideIn]="shown" id="slide-in">
// <mat-card id="contact-card">
//   <mat-card-header>
//     <div mat-card-avatar class="example-header-image"></div>
//     <mat-card-title>contact</mat-card-title>
//     <mat-card-subtitle>me</mat-card-subtitle>
//   </mat-card-header>
//   <!-- <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu"> -->
//   <mat-card-content>
//     <form id="contact-form">
//       <mat-form-field class="example-full-width">
//         <input matInput placeholder="e-mail">
//       </mat-form-field>
//       <mat-form-field class="example-full-width">
//         <input matInput placeholder="name">
//       </mat-form-field>
    
//       <mat-form-field class="example-full-width">
//         <textarea matInput placeholder="Leave a comment"></textarea>
//       </mat-form-field>
//     </form>
//   </mat-card-content>
//   <mat-card-actions>
//     <button mat-button>LIKE</button>
//     <button mat-button>SHARE</button>
//   </mat-card-actions>
// </mat-card>
// </div>