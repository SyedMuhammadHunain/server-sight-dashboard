import { Component, Input } from '@angular/core';

@Component({
  selector: '[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) icon!: string;
}
