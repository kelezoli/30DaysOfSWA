import React , { useEffect }  from "react" ;
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
const TITLE = "Team";
const DESCRIPTION = "Awesome people working";

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
                                <img src="img/svg/avatar-svgrepo-com(1).svg" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Anshul Goyal</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/svg/avatar-svgrepo-com(2).svg"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">egy másik név</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/svg/avatar-svgrepo-com(3).svg" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Anshul Goyal</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/svg/avatar-svgrepo-com(4).svg" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Anshul Goyal</h4>
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
                                <img src="img/svg/avatar-svgrepo-com(5).svg" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Anshul Goyal</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/svg/avatar-svgrepo-com(6).svg" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Anshul Goyal</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/svg/avatar-svgrepo-com(7).svg" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name">Anshul Goyal</h4>
                                <small className="avatar__subtitle">lorem ipusum dolores and other things that servers a good duummy text in this desriptive small content</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/svg/avatar-svgrepo-com(8).svg" />
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

      </main>
    </Layout>
  );
}
export default Team;