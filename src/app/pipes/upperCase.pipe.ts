import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: "upperCaseCustom",
    standalone: false
})
export class UpperCasePipe implements PipeTransform {

    transform(value: string) {
        return value.toUpperCase();
    }

}