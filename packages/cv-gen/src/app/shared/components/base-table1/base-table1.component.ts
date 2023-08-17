import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IColumns } from '../../interfaces/shared.interfeces';

@Component({
  selector: 'cv-gen-base-table1',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './base-table1.component.html',
  styleUrls: ['./base-table1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTable1Component {
  @Input() data: unknown[];
  @Input() cols: IColumns[];
  @Input() rowCallback: (rowData: {[key: string]: unknown}) => void;
}
