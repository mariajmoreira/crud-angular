import { Pipe, PipeTransform } from '@angular/core';
import { IconProp,IconPrefix,IconName } from '@fortawesome/fontawesome-svg-core';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string):IconProp {

    switch(value){
      case 'Grãos' : return ['fas','wheat-awn'];
      case 'Fruit' : return ['fas','apple-whole'];
    }
    return ['fas','star'];
  }

}
