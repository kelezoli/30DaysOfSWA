import React , { useEffect }  from "react" ;
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
const TITLE = "Showcase";
const DESCRIPTION = "Current technologies in Europe. They are the most progressive now. Or not. this is just a dummy text to see how a longer description may look like here.";
const TITLE_2 = "Other producers";
const DESCRIPTION_2 = " They are the ones we are extremely proud of.  Or not.";
function Team_showcase() {
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
                                <img src="img/png/34Website_Template_01.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">the harmonic state</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_02.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Supercharged productivity</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_05.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Newest Americansl</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_07.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Andy Warhol</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
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
                                <img src="img/png/34Website_Template_09.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">donno what</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_10.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">The year of..</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_14.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">The Blairwitch project</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_19.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="http://www.kelemenzoltan.com">Zoltán Kelemen</a></h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>



        </div>

        <div className="text--center margin-bottom--xl">
          <h1>{TITLE_2}</h1>
          <p>{DESCRIPTION_2}</p>
        </div> 

        <div className="row">

          <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_01.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">the harmonic state</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_02.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Supercharged productivity</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_05.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Newest Americansl</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/34Website_Template_07.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Andy Warhol</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
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
export default Team_showcase;