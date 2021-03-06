import {IChoiceBook} from "./IChoiceBook"
import {IWorldLiterature} from "./IWorldLiterature"
import {ITopicBook} from "./ITopicBook"
import {IPoem} from './IPoem'

export interface IMainPages{
    choiceBook:[IChoiceBook];
    worldLiterature: [IWorldLiterature];
    topicBook?: [ITopicBook];
    poem?: [IPoem];
}