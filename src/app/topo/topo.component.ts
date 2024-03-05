import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.html',
  standalone: true,
  imports: [RouterLinkActive, RouterLink]
})
export class TopoComponent {}
