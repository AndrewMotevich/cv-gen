import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseInputClass } from '../../shared/classes/base-input.class';

@Component({
  selector: 'cv-gen-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsInputComponent extends BaseInputClass {
  @Input() public label: string;
  @Input() public placeholder: string;

  constructor(
    @Self() @Optional() ngControl: NgControl,
    cdRef: ChangeDetectorRef
  ) {
    super(ngControl, cdRef);
    this.ngControl.valueAccessor = this;
  }
}
