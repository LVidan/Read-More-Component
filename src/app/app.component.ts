import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FullDescriptionModalComponent } from './read-more/full-description-modal/full-description-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: NgbModal) { }

  title = 'read-more';
  crdContent: any[] = [
    'On-brand but completeley fresh ladder up / ladder back to the strategy and we are running out of runway but drive awareness to increase engagement can we parallel path or products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved nor big picture. Circle back. Q1 are we in agreeance ladder up / ladder back to the strategy nor best practices paddle on both sides. Touch base land the plane can you ballpark the cost per unit for me. Work flows quick win meeting assassin, yet (lets not try to) boil the ocean (here/there/everywhere), usabiltiy, but out of the loop. Post launch reach out wiggle room, so we need to start advertising on social media. Hard stop. Churning anomalies organic growth. My capacity is full imagineer i am dead inside but move the needle not the long pole in my tent deep dive drink from the firehose. In an ideal world. Create spaces to explore whats next groom the backlog, guerrilla marketing accountable talk. Get six alpha pups in here for a focus group dunder mifflin.',

    'Idea shower. Gain alignment. Big picture. Beef up it is all exactly as i said, but i dont like it on-brand but completeley fresh so cloud strategy create spaces to explore whats next. Bells and whistles where do we stand on the latest client ask, yet we dont need to boil the ocean here. Design thinking old boys club, and not the long pole in my tent, but create spaces to explore whats next. Closing these latest prospects is like putting socks on an octopus gain traction message the initiative, loop back. Drink the Kool-aid knowledge is power. Synergize productive mindfulness.',

    'What the action item message the initiative so in an ideal world flesh that out. One-sheet. Timeframe teams were able to drive adoption and awareness so helicopter view enough to wash your face. Those options are already baked in with this model UX, yet granularity. Clear blue water hard stop. Work bleeding edge can we align on lunch orders, nor turn the ship lets unpack that later shelfware. Win-win what are the expectations whats the status on the deliverables for eow? in this space optimize for search or those options are already baked in with this model, but get all your ducks in a row. On-brand but completeley fresh synergize productive mindfulness so clear blue water. Productize obviously and your work on this project has been really impactful high turnaround rate work. Its a simple lift and shift job streamline, nor hit the ground running, products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved yet how much bandwidth do you have. What about scaling components to a global audience? digitalize for data-point circle back dunder mifflin, yet quarterly sales are at an all-time low onward and upward, productize the deliverables and focus on the bottom line. Products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved reach out drink from the firehose. Five-year strategic plan not a hill to die on yet spinning our wheels. Level the playing field overcome key issues to meet key milestones, nor window-licker, pixel pushing, or workflow ecosystem enough to wash your face so nail jelly to the hothouse wall. Product market fit rock Star/Ninja, for pushback, or low engagement quantity so we are running out of runway. What the your work on this project has been really impactful. Red flag product launch. Granularity shelfware, or due diligence, fast track imagineer, or going forward, so can you slack it to me?. Face time it is all exactly as i said, but i dont like it draw a line in the sand. Forcing function we need a paradigm shift, can you send me an invite? let me know if you need me to crack any skulls herding cats, for out of the loop can we parallel path. We need to start advertising on social media push back are there any leftovers in the kitchen? so i???ve been doing some research this morning and we need to better horsehead offer, so good optics but 60% to 30% is a lot of persent.'
  ];

  onClickAction(content: string) {
    const modalRef = this.modalService.open(FullDescriptionModalComponent);
    modalRef.componentInstance.fullContent = content;
  }
}
