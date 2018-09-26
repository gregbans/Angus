import { Injectable } from '@angular/core';
//import { getMaxListeners } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class DataService {
tasks = [
  {
    id: 0,
    nom : "faire la vaisselle en string",
    description: "il est important de cultiver une certaine sensualité dans les tache les avelicante du quotidien afin de rendre celui-ci bin plus attrayant pour soi même et les autre. Car nous sommes des êtres soaciaux, toujours à la recherche d'un accouple fortuit. SG",
    status : 1,
  },
  {
    id: 1,
    nom : "tout mettre dans l'éléve",
    description: "Lorsque on un probleme avec un singleton, autant fourré l'éléve de toutes les fonction disponible en pretant attention à se montrer courtois et généreux",
    status : 2,
  },
  {
    id: 2,
    nom : "lui dire ftg fdp",
    description: "arrivé à saturation d'un de sandrine, se rendre à l'evidence de son competence, et lui signifier que la derniere chose coherante etant sorti de sa bouche est certainement un penis ",
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
