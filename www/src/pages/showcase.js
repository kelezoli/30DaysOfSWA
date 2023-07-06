import React , { useEffect }  from "react" ;
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
const TITLE = "Simulators and integrators";
const DESCRIPTION = "Current simulator technologies and integrator companies as of 2022. The list includes virtual reality and augmented reality solutions. Scroll down for other categories.";
const TITLE_2 = "Head mounted devices (HMD's)";
const DESCRIPTION_2 = "A short list of the current state of art devices. See 'Handbook > The Basics > VR - Current State of the Art' section of the handbook for details";
const TITLE_3 = "Other stuff";
const DESCRIPTION_3 = "Approaches and Labs and Metaverses and other simulator producers not directly linked to vocational education in Europe. Interesting articles on using devices and their pedagogical approaches. Links to sites offering VR and AR related solutions such as a metaverse.";

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
                                <img src="img/png/apolostudios.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="http://www.apolostudios.com/index.php/en/videos-ae"> Apolo Studios</a></h4>
                                <small className="avatar__subtitle">High precision simulations with magnetic resonance sensors. Welding, forklifts and vehicles.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/Class_VR.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.classvr.com">Class VR</a></h4>
                                <small className="avatar__subtitle">Create and deliver immersive and engaging lessons with ClassVR’s classroom-ready VR & AR solution</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/cm_labs.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.cm-labs.com">CM Labs</a></h4>
                                <small className="avatar__subtitle">High-tech solutions to help clients design advanced equipment and prepare for skilled operations.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/cospaces.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://cospaces.io/edu/">CoSpaces</a></h4>
                                <small className="avatar__subtitle">Kid friendly integrated solutions for digital education with a lot of resources.</small>
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
                                <img src="img/png/diginext.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.diginext.fr/en/">Diginext</a> </h4>
                                <small className="avatar__subtitle">Professional simulations for many purposes, crisis training, health and safety, aviation and military.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/fronius_com.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.fronius.com/en/welding-technology/innovative-solutions/welding-education">Fronius</a> </h4>
                                <small className="avatar__subtitle">Well known welding machine producer with Virtual Reality welding simulators and trainings.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/FusionVR.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href=" https://www.fusionvr.in/">Fusion VR</a> </h4>
                                <small className="avatar__subtitle">One of India’s Industry 4.0 Solutions companies helping businesses in Digital-Transformation.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/immersion_fr.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="http://www.immersion.fr/en/">Immersion</a></h4>
                                <small className="avatar__subtitle">European expert in virtual reality augmented reality and collaborative solutions, in industry and research.</small>
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
                                <img src="img/png/learnvirtual.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.learnvirtual.eu/en/">Learn Virtual Europe</a> </h4>
                                <small className="avatar__subtitle">A well known distributor of wide range of Virtual Reality simulators specialising in vocational education.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/lincoln.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.lincolnelectric.com/en/education/training-programs/education-products/welding-training-systems/virtual-trainers">Lincoln Electric</a> </h4>
                                <small className="avatar__subtitle">Hands-on skill-building with the integration of Lincoln Electric’s VRTEX® welding simulators.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/mimbus.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.mimbus.com/en/">Mimbus</a> </h4>
                                <small className="avatar__subtitle">Expert in immersive solutions and assists you in integrating the new ways into educational programs</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/realitylabs.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://about.meta.com/realitylabs/">Reality Labs</a></h4>
                                <small className="avatar__subtitle">former Facebook, with a mission: build tools that help people feel connected, anytime, anywhere.</small>
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
                                <img src="img/png/tenstarsimulation.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.tenstarsimulation.com/">Tenstar</a> </h4>
                                <small className="avatar__subtitle">Professional simulators in Transportation, Construction, Agriculture Forrestry and Traffic.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/seabery.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.seaberyat.com">Seabery</a> </h4>
                                <small className="avatar__subtitle">One of the leaders in development of educational solutions with Augmented Reality simulation technology.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/virsabi.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://virsabi.com">Virsabi</a> </h4>
                                <small className="avatar__subtitle">A Danish virtual reality studio, offering consultancy and technical development for VR, AR and MR</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/vrsim.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="http://www.vrsim.net">VRSim</a></h4>
                                <small className="avatar__subtitle">Simulations in spray coatings, welding, advanced manufacturing, construction, robotics. </small>
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
                                <img src="img/png/hp_reverb.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.hp.com/us-en/shop/pdp/hp-reverb-g2-virtual-reality-headset"> HP Reverb </a></h4>
                                <small className="avatar__subtitle">Sensational VR. State-of-the-art sensors capture the state of being Sensors measure muscle movement, gaze, pupil size and pulse.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/vive_flow.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.vive.com/us/product/vive-flow/overview/"> HTC Vive Flow</a></h4>
                                <small className="avatar__subtitle">The VR glasses are made for wellness and mindful productivity. This is mobile VR equipment, meaning you need to use your phone.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/Vive_pro_2.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.vive.com/us/product/vive-pro2/overview/">HTC Vive Pro </a></h4>
                                <small className="avatar__subtitle">One of the examples of the state of the art is the HTC VIVE PRO 2. It has High Res Screens an Professional Hi-Res Certified headphones</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/magic_leap.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://www.magicleap.com/en-us/"> Magic Leap</a></h4>
                                <small className="avatar__subtitle">Magic Leap is an American technology company that released a virtual retinal display, superimposing 3D imagery over real world objects.</small>
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
                      <img src="img/png/Meta_quest_pro.png" />
                  </div>
          
              <div className="card__body">
                  <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name"><a href="https://www.meta.com/quest/quest-pro/"> Oculus - Meta Quest Pro </a></h4>
                      <small className="avatar__subtitle">Oculus Quest 2 (rebranded as Meta Quest 2 in November 2021) is a virtual reality (VR) headset developed by Reality Labs (formerly Oculus). </small>
                  </div>
                  </div>
              </div>
         </div>
 </div>

 <div className="col col--3 margin-bottom--lg">
          <div className={clsx("card", styles.showcaseUser)}>
                  <div className="card__image">
                      <img src="img/png/varjo.png"/>
                  </div>
          
              <div className="card__body">
                  <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name"><a href="https://varjo.com/products/xr-3/"> Varjo X3</a></h4>
                      <small className="avatar__subtitle">Varjo, a Finnish manufacturer specializes in developing high-resolution devices that offer clarity comparable to the human eye.</small>
                  </div>
                  </div>
              </div>
         </div>
 </div>

 <div className="col col--3 margin-bottom--lg">
          <div className={clsx("card", styles.showcaseUser)}>
                  <div className="card__image">
                      <img src="img/png/hololens.png" />
                  </div>
          
              <div className="card__body">
                  <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name"> <a href="https://www.microsoft.com/en-us/hololens/industry-education">Hololens 2 </a></h4>
                      <small className="avatar__subtitle">Microsoft has a lots of apps for Manufacturing, Healthcare and Education. For details see 'Handbook > The Basics > Mixed Reality'.
.</small>
                  </div>
                  </div>
              </div>
         </div>
 </div>

  



</div>
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE_3}</h1>
          <p>{DESCRIPTION_3}</p>
        </div> 

        <div className="row">

          <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/4cid.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.4cid.org/" >Four component instructional design</a></h4>
                                <small className="avatar__subtitle">Design for learning aimed at integrative goals where knowledge, skills, and attitudes are developed simultaneously.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/belithe.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.belithe.com/how-virtual-reality-affects-skills-training/"> Article on VR future</a></h4>
                                <small className="avatar__subtitle">Arcticle. The workforce now faces many new demands. Experts predict a new division of labor between humans and machines by 2025. </small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/ecoxpt.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://ecolearn.gse.harvard.edu/projects/ecoxpt"> Ecosystem VR</a></h4>
                                <small className="avatar__subtitle">EcoXPT is an immersive simulation by Harvard University in which students use inquiry to learn how ecosystems work.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/g2.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://learn.g2.com/mixed-reality">Mixed reality</a> </h4>
                                <small className="avatar__subtitle">Mixed reality (MR) is a hybrid of augmented reality and augmented virtuality where virtual objects interact with real-life objects...</small>
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
                                <img src="img/png/roboris.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.roboris.it/en/eureka-robot/" >Robotic simulation</a></h4>
                                <small className="avatar__subtitle">Eureka robot: real time simulation with a millions of movement. </small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/secondlife.png"/>
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://www.secondlife.com/"> Secondlife</a></h4>
                                <small className="avatar__subtitle">Secondlife is an example a virtual universe or rather a metaverse with avatars and communities.  </small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/skilveri.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"> <a href="https://skillveri.in/"> Skillveri</a></h4>
                                <small className="avatar__subtitle">Skillveri is an Indian producer offering metaverse a virtual world for skill training in 12 skills and 4 verticals.</small>
                            </div>
                            </div>
                        </div>
                   </div>
           </div>

           <div className="col col--3 margin-bottom--lg">
                    <div className={clsx("card", styles.showcaseUser)}>
                            <div className="card__image">
                                <img src="img/png/surgical_science.png" />
                            </div>
                    
                        <div className="card__body">
                            <div className="avatar">
                            <div className="avatar__intro margin-left--none">
                                <h4 className="avatar__name"><a href="https://surgicalscience.com/">Surgical Science</a> </h4>
                                <small className="avatar__subtitle">A producer offering "Prepare more confident medical professionals  with virtual reality simulation training". </small>
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