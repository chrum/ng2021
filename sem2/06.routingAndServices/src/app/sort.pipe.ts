import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./definitions";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(values: Product[], field: keyof Product, dir = "asc"): Product[] {
    if (!values) {
      return [];
    }

    return values.sort((a, b) => {
      if (dir === "asc") {
        return +a[field] - +b[field];
      }
      return +b[field] - +a[field];
    });
  }
}
