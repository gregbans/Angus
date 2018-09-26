import { Injectable } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class DataService {
tasks = [
  {
    id: 0,
    nom : "Faire la vaisselle en string",
    description: "Il est important de cultiver une certaine sensualité dans les tâches avelicantes du quotidien afin de rendre celui-ci bien plus attrayant pour soi-même et les autres. Car nous sommes des êtres sociaux, toujours à la recherche d'un accouplement fortuit. SG",
    status : 1,
  },
  {
    id: 1,
    nom : "Tout mettre dans l'éléve",
    description: "Lorsque on a un probleme avec un singleton, autant fourré l'éléve de toutes les fonctions disponibles en pretant attention à se montrer courtois et généreux",
    status : 2,
  },
  {
    id: 2,
    nom : "Lui dire ftg fdp",
    description: "Arrivé à saturation, se rendre à l'evidence de son incompétence. ",
    status : 2,
  }
]
user =[
  {
    login:"gregory.bannier@gmail.com",
    mdp:"azerty", 
  }
]

  constructor() { }
}
