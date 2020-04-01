import React, { useState } from 'react';
import SubtopicHeader from './typologySelect/subtopicHeader';
import OpportunityButton from './typologySelect/opportunityButton';
import definitions from '../content/definitions.json';
import opportunties from '../content/opportunities.json';

const TypologySelect = () => {
  const [typology, setTypology] = useState('adu');
  const selectWidth = {
    adu: 225,
    'tiny house': 100,
    'row house': 100,
    'mixed-use': 340,
    cottage: 210,
    cohousing: 180,
  };

  return (
    <section>
      <h2 className="typology-select__header">
        Explore
        {' '}
        {typology === 'adu' ? 'an ' : 'a '}
      </h2>
      <div className="typology-select__wrapper">
        <select
          className="typology-select__selector"
          onChange={(event) => setTypology(event.target.value)}
          style={{
            width: `${selectWidth[typology] + 30}px`,
          }}
        >
          <option value="adu" className="typology-select__option" defaultValue>accessory dwelling unit</option>
          <option value="tiny house">tiny house</option>
          <option value="row house">row house</option>
          <option value="mixed-use">small scale mixed-use development</option>
          <option value="cottage">cottage development</option>
          <option value="cohousing">cohousing building</option>
        </select>
      </div>
      <div
        className="typology-select__shadow"
        style={{
          left: typology === 'adu' ? '108px' : '98px',
          width: `${selectWidth[typology]}px`,
        }}
      />
      <p>{definitions[typology]}</p>
      <SubtopicHeader title="History" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="opportunity__wrapper">
        <OpportunityButton description={opportunties[typology].history.one} />
        <OpportunityButton description={opportunties[typology].history.two} />
      </div>
      <SubtopicHeader title="Potential Layouts" />
      <p>Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Faucibus et molestie ac feugiat. Neque aliquam vestibulum morbi blandit cursus. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Gravida rutrum quisque non tellus orci. Sed blandit libero volutpat sed cras. Iaculis at erat pellentesque adipiscing commodo elit. Eget magna fermentum iaculis eu non diam phasellus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nisi quis eleifend quam adipiscing vitae. Nulla facilisi morbi tempus iaculis urna. Et malesuada fames ac turpis egestas sed tempus urna et. Risus commodo viverra maecenas accumsan lacus vel.</p>
      <p>Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Sit amet volutpat consequat mauris nunc congue. Sapien et ligula ullamcorper malesuada proin. At ultrices mi tempus imperdiet nulla. Non sodales neque sodales ut etiam sit. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Nunc sed augue lacus viverra vitae congue eu consequat ac. In eu mi bibendum neque egestas congue quisque egestas diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Aliquet nibh praesent tristique magna sit amet. Amet dictum sit amet justo. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Ultrices gravida dictum fusce ut placerat orci.</p>
      <div className="opportunity__wrapper">
        <OpportunityButton description={opportunties[typology]['potential layouts'].one} />
        <OpportunityButton description={opportunties[typology]['potential layouts'].two} />
      </div>
    </section>
  );
};

export default TypologySelect;
