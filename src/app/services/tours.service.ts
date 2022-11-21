import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ToursService {
    tours = [
        {date: `${new Date('2023-07-16').toDateString()}`, location: 'DETROIT, MI', arena: 'DTE ENERGY MUSIC THEATRE'},
        {date: `${new Date('2023-07-18').toDateString()}`, location: 'TORONTO, ON', arena: 'BUDWEISER STAGE'},
        {date: `${new Date('2023-07-22').toDateString()}`, location: 'BRISTOW, VA', arena: 'JIGGY LUBE LIVE'},
        {date: `${new Date('2023-07-29').toDateString()}`, location: 'PHOENIX, AZ', arena: 'AK-CHIN PAVILION'},
        {date: `${new Date('2023-08-2').toDateString()}`, location: 'LAS VEGAS, NV', arena: 'T-MOBILE ARENA'},
        {date: `${new Date('2023-08-8').toDateString()}`, location: 'CONCORD, CA', arena: 'CONCORD PAVILION'},
        {date: `${new Date('2023-08-28').toDateString()}`, location: 'LAS VEGAS, NV', arena: 'CONCORD PAVILION'},
        {date: `${new Date('2024-01-01').toDateString()}`, location: 'LAS VEGAS, NV', arena: 'CONCORD PAVILION'},
    ]
}