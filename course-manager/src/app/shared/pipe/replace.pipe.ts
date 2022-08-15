import { Pipe, PipeTransform } from "@angular/core";

// Criando um novo pipe replace
@Pipe({
    // nome do pipe
    name: "replace"
})
export class ReplacePipe implements PipeTransform {
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}