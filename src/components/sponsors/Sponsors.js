import React from "react";

import SponsorCard from "./SponsorCard";
import "./Sponsors.css";
import { sponsorsList } from "./content/sponsors";

export default () => (
   <div id="sponsors">
      <h2 className="side-panel__header-title">Sponsors</h2>
      <div className="side-panel__content sponsor" />
      <p>
         We're putting together a list of our amazing Sponsors you should be expecting at
         React Summit 2019
      </p>
      <a href="#" className="button apply" target="_blank">
         Request to Sponsor
      </a>

      <div className="side-panel__content sponsors">
         {/*sponsorsList.map((sponsor, index) => (
				<SponsorCard
					key={`sponsor-${index}`}
					name={sponsor.name}
					introText={sponsor.introText}
					image={sponsor.image}
					url={sponsor.url}
				/>
			))*/}
      </div>
   </div>
);
