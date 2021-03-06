import React from 'react';
import ButtonLink from './buttonLink';
import Translate from './translate';

const Community = () => {
  return (
    <Translate
      all={t => (
        <div className="community">
          <h4>{t.teams}</h4>
          <ButtonLink to="https://etcconsortium.org/" text={t.etcConsortium} />
          <ButtonLink to="https://etccooperative.org" text={t.etcCooperative} />
          <ButtonLink to="https://etccore.io/" text={t.etcCore} />
          <ButtonLink to="https://etclabs.org/" text={t.etcLabs} />
          <ButtonLink to="https://www.godel.ai/" text={t.godel} />
          <h4>{t.regionalSites}</h4>
          <ButtonLink to="http://ethereumclassicasia.org" text={t.etcAsia} />
          <ButtonLink to="http://ethereumclassic.cn" text={t.etcChina} />
          <ButtonLink to="https://www.ethereumclassickorea.com/" text={t.etcKorea} />
        </div>
      )}
    />
  );
};

export default Community;
