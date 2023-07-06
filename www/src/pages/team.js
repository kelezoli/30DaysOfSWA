import React , { useEffect }  from "react" ;
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
const TITLE = "Team";
const DESCRIPTION = "It was a pleasure to work together. Good luck and thanks for the fish!";

function Team() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
        </div>

        <div className="row">

          <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Alonso_María_Toscano.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.linkedin.com/in/mar%C3%ADa-toscano-alonso/">Maria Alonso Toscano</a></h4>
                                <small className="avatar__subtitle">lorem ipsum dolores and other things that servers a good duummy text in this desriptive small content </small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Benus_Ferenc_jr.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://learnvirtual.eu/en/about-us"> Ferenc Benus Jr </a></h4>
                                <small className="avatar__subtitle">Techical director and strategical advisor for Learn Virtual Europe. I develop simulators and educational systems in VET since 2004.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Habek_Zeljko.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href=""> Zeljko Habek </a></h4>
                                <small className="avatar__subtitle">President of the #STRUKA association, Erasmus+ ambassador for VET. 
Creator of an integrated interactive system for lifelong education of S-K-S welders. </small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Harboe_Michael.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.linkedin.com/in/michaelharboedk/"> Michael Harboe </a></h4>
                                <small className="avatar__subtitle">Experienced Strategic Advisor and CEO of Virsabi, advising organizations on the topics of VR, AR, Metaverse, Web3, etc.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>
           
        </div> 

        
        <div className="row">

        <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Kelemen_Zoltan.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="http://www.kelemenzoltan.com">Zoltán Kelemen</a></h4>
                                <small className="avatar__subtitle">Independent consultant since 2003. I develop unique new methods to offer a playful and powerful way of change. </small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_KonigAnja.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href=""> Anja König</a></h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Knezevic_Davor.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="
https://www.linkedin.com/in/davor-kne%C5%BEevi%C4%87-07774b211/"> Davor Knežević</a></h4>
                                <small className="avatar__subtitle">Master Degree in computing science. Teacher in Industrial and trade school in Slavonski Brod, Croatia. </small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>
       
           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Leandres_Marta_Toronjo.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="http://">Marta Toronjo Leandres</a></h4>
                                <small className="avatar__subtitle">I´m the person in charge of the innovation project funding and training & documentation area.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>
        </div>

        <div className="row">
           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Margeta_Edita.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.linkedin.com/in/edita-margeta-b2a9608a/">Edita Margeta</a></h4>
                                <small className="avatar__subtitle">MA in English and German language and literature
English and German language teacher at Industrial and Trade School Slavonski Brod, Croatia</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Ochmirova_Kristina.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.linkedin.com/in/krist%C3%ADna-ochm%C3%ADrov%C3%A1-206359165/">Kristína Ochmírová</a></h4>
                                <small className="avatar__subtitle">I am a Project Officer at Virsabi, AP degree in Computer Science, PBA Software Development.
Working with Virtual Reality software development since 2018.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Poplawski_Jakub.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="">Jakub Poplawski</a></h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>
        
           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Savu_Sorin.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.linkedin.com/in/sorin-savu-a3238a43/">prof. Sorin Savu Vasile, PhD</a></h4>
                                <small className="avatar__subtitle">I am specialized in Industrial Engineering with focus on hybrid heating systems for welding materials, sintering as well as microwave processing.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>
        </div>
        <div className="row">
           <div className="col col--3 margin-bottom--lg">
                
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Schmelzer_Aimee.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.linkedin.com/in/aimee-schmelzer-7b422510/">Aimée Schmelzer</a></h4>
                                <small className="avatar__subtitle">International welding specialist, part-time teacher for welding technology, board member of the Swiss welding association SVS, expert in digital welding training</small>
                            </div>
                            </div>
                        </div>
                   </div>
                
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/avatar_Venetz_Noemi.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.linkedin.com/in/noemi-venetz-41382620b/">Noemi Venetz</a></h4>
                                <small className="avatar__subtitle">I am working for the Swiss association for welding technology in Basel since April 2022.

It was a great experience to be part of the project DRinVET.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

        
           
        </div>
        

        

      </main>
    </Layout>
  );
}
export default Team;