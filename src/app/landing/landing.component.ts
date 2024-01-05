import { Component, HostListener } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor() { };

  w = window.innerWidth;
  h = window.innerHeight;
  r = this.gcd(this.w, this.h);

  wW = window.innerWidth;
  timeLine = true;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let top = window.scrollY;
    $('.overlay').css(`width`, `${92 - ((92 * (top / 2.2)) / this.h)}svw`);
  }

  array: Array<any> = [];
  increaseSpeed = setInterval(() => {
    this.array.forEach((e) => {
      e.dx += e.speed;
    })
  }, 1);
  ngOnInit() {
    $('.overlay').css(`aspect-ratio`, `${this.w / this.r}/${this.h / this.r}`);
    this.animate();
    setTimeout(() => { clearInterval(this.increaseSpeed); }, 8000);
    this.array = [{
      dom: document.getElementById("rod"),
      xPosi: 0,
      dx: 0,
      speed: 0.005
    }, {
      dom: document.getElementById("rail"),
      xPosi: 0,
      dx: 0,
      speed: 0.002
    }]
  }
  public gcd(a: number, b: number): number {
    return (b == 0) ? a : this.gcd(b, a % b);
  }
  public animate() {
    window.requestAnimationFrame(() => this.animate());
    this.array.forEach((obj) => {
      obj.dom.style.transform = `translate(${obj.xPosi}px , -50px) rotateX(10deg)`;
      obj.xPosi >= this.wW ? obj.xPosi = -100 : obj.xPosi += obj.dx;
    })
  }
}
