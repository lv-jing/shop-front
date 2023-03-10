import React from 'react';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import { inject, observer } from 'mobx-react';
import { seoHoc } from '@/framework/common';
import BreadCrumbs from '@/components/BreadCrumbs';
import BannerTip from '@/components/BannerTip';
import './index.css';
import Canonical from '@/components/Canonical';

const localItemRoyal = window.__.localItemRoyal;
@injectIntl
@inject('configStore')
@seoHoc('general terms conditions page')
@observer
class FelinTermsConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tel: '',

      mailAddress: ''
    };
  }

  componentDidMount() {
    const {
      configStore: { storeContactPhoneNumber, storeContactEmail }
    } = this.props;

    this.setState({
      tel: 'tel:' + storeContactPhoneNumber,
      mailAddress: 'mailto:' + storeContactEmail
    });
  }
  render(h) {
    const event = {
      page: {
        type: 'other',
        theme: '',
        path: location.pathname,
        error: '',
        hitTimestamp: new Date(),
        filters: ''
      }
    };
    return (
      <div>
        <GoogleTagManager
          key={this.props.location.key}
          additionalEvents={event}
        />
        <Canonical />
        <Header {...this.props} showMiniIcons={true} showUserIcon={true} />

        <main className="rc-content--fixed-header rc-bg-colour--brand3">
          {window.__.env.REACT_APP_COUNTRY == 'fr' ? null : <BannerTip />}
          <BreadCrumbs />
          {/* <div className="rc-bg-colour--brand3 rc-bottom-spacing data-checkout-stage rc-max-width--lg rc-padding-x--md--mobile"> */}
          <div className="rc-max-width--xl rc-padding-x--sm rc-padding-x--md--mobile rc-margin-y--sm rc-margin-y--lg--mobile richtext  noParagraphMargin">
            <div className="rc-bg-colour--brand3">
              <div className="rc-padding-left--none">
                <div className="rc-one-column">
                  <div className="rc-column rc-padding-left--none">
                    <div className="rc-full-width rc-text--left rc-padding-x--sm rc- padding-left--none">
                      <h2
                        className="text-center"
                        style={{
                          color: '#E2001A',
                          marginTop: '1.25rem',
                          fontSize: '2.5rem'
                        }}
                      >
                        CONDITIONS G??N??RALES DE RESERVATION
                      </h2>
                    </div>
                  </div>
                </div>

                <p>
                  {' '}
                  Les pr??sentes conditions g??n??rales de r??servation (les{' '}
                  <strong>"Conditions"</strong>), ainsi que la Politique de
                  Confidentialit?? r??gissent la relation et d??terminent les
                  conditions juridiques dans lesquelles Royal Canin fournit ses
                  services sur son Site (tel que d??fini plus bas). Veuillez-vous
                  assurer que vous les avez lues et comprises avant de confirmer
                  votre r??servation sur le Site.
                </p>

                <p>
                  Royal Canin se r??serve le droit de r??viser et de modifier les
                  pr??sentes Conditions pour tenir compte de l'??volution de la
                  technologie, des changements dans les m??thodes de paiement,
                  des modifications des lois et des exigences r??glementaires
                  pertinentes, ainsi que des changements dans les capacit??s du
                  syst??me, ??tant pr??cis?? que les Conditions applicables ?? votre
                  r??servation sont celles que vous acceptez au moment de la
                  confirmation de la commande, qui sont accessibles sur le Site
                  et en vigueur.
                </p>

                <p>Les pr??sentes Conditions sont applicables entre</p>

                <p style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
                  Royal Canin France{' '}
                </p>
                <p>
                  Soci??t?? par actions simplifi??e immatricul??e au RCS de N??mes
                  sous le num??ro 380??824??888
                </p>
                <p>
                  Dont le si??ge social se situe 650 avenue de la petite
                  Camargue, 30470 Aimargues
                </p>
                <p>Num??ro de t??l??phone??: [to be completed]; </p>
                <p>Adresse email??: [to be completed]??; </p>
                <p>
                  Capital social??: <strong>917??986?????</strong>; Num??ro de TVA??:{' '}
                  <strong>FR43380824888</strong>
                </p>

                <p>
                  {' '}
                  (ci-apr??s d??nomm??e <strong>"Royal Canin")</strong>{' '}
                </p>
                <br />
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>et </p>
                <p>
                  les consommateurs qui utilisent le site Internet "L???Atelier
                  F??lin" de Royal Canin accessible ?? l???adresse [hyperlink to be
                  completed] (ci-apr??s d??nomm?? le "Site") pour r??server un
                  rendez-vous avec un sp??cialiste de la sant?? animale et de la
                  nutrition (comportementaliste, expert en nutrition, ost??opathe
                  ou toiletteur) pour les guider pour prendre soin de leur chat
                  (ci-apr??s la "R??servation").
                </p>
                <br />
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  1.R??servation, acceptation et confirmation de la commande
                </p>
                <p>
                  Vous pouvez passer une commande directement sur le Site pour
                  r??server un rendez-vous avec un sp??cialiste. Selon votre
                  choix, le rendez-vous se d??roulera dans la boutique de
                  l???Atelier F??lin situ?? au 142 boulevard Saint-Germain, 75006
                  Paris ou par appel vid??o sur une application de messagerie
                  (par exemple, WhatsApp). Au moment de la R??servation, il vous
                  sera demand?? de renseigner vos coordonn??es ou de vous
                  connecter si vous disposez d???un compte Royal Canin sur le site
                  www.royalcanin.com/fr.{' '}
                </p>
                <br></br>
                <p>
                  Une fois votre panier valid??, vous devrez valider votre moyen
                  de paiement le cas ??ch??ant puis confirmer votre R??servation,
                  cette derni??re ??tape formalisant le contrat avec Royal Canin.
                </p>
                <br></br>
                <p>
                  Royal Canin accusera r??ception de votre commande d??s sa
                  validation en vous envoyant un email de confirmation de
                  commande.
                </p>
                <br></br>
                <p>
                  Dans certains cas, notamment pour d??faut de paiement, adresse
                  erron??e ou tout autre probl??me li?? ?? votre compte, Royal Canin
                  se r??serve le droit de bloquer votre commande jusqu'?? la
                  r??solution du probl??me.
                </p>
                <br></br>
                <p>
                  Dans le cas o?? le sp??cialiste est indisponible, vous en serez
                  inform?? sans d??lai. Vous aurez la possibilit?? de modifier
                  votre R??servation ou de l???annuler, auquel cas le montant que
                  vous avez pay?? vous sera rembours?? par le moyen de paiement
                  utilis?? lors de votre commande.
                </p>
                <br />
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  2.Prix et paiement{' '}
                </p>
                <p>
                  Royal Canin se r??serve le droit de modifier ses prix ?? tout
                  moment ?? sa seule discr??tion. De telles modifications
                  n???affecteront pas les commandes d??j?? pass??es, et vous serez
                  toujours factur?? au prix affich?? au moment de votre commande.
                </p>
                <br></br>
                <div style={{ marginLeft: 20 }}>
                  <p>2.1 Prix</p>
                  <p>
                    Tous les prix affich??s sur le Site sont en Euros et incluent
                    le montant de la TVA applicable en France.
                  </p>
                  <br></br>
                  <p>2.2 Paiement</p>
                  <p>
                    Vous pouvez effectuer le paiement de votre commande par
                    carte bancaire : Carte Bleue, e-carte bleue, Visa,
                    Mastercard, carte American Express, Discover. Votre compte
                    sera d??bit?? lors de la confirmation de la commande.
                  </p>
                  <br></br>
                  <p>Le paiement doit ??tre effectu?? en Euros.</p>
                  <br></br>
                  <p>
                    Afin d'offrir un syst??me de paiement s??curis??, Royal Canin
                    utilise les syst??mes de paiement s??curis?? des principales
                    institutions financi??res.
                  </p>
                </div>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  3.Modifier et annuler la R??servation
                </p>
                <p>
                  Vous pouvez modifier ou annuler votre R??servation jusqu?????
                  vingt-quatre (24) heures avant l???heure pr??vue :
                </p>
                <p style={{ marginLeft: 20 }}>
                  -en utilisant votre compte Royal Canin sur le Site, ou
                </p>
                <p style={{ marginLeft: 20 }}>
                  -en contactant Royal Canin par email ?? l???adresse [to be
                  completed] ou par t??l??phone au [to be completed].
                </p>

                <p>
                  En cas d???annulation, Royal Canin vous remboursera dans des
                  conditions identiques ?? celles d??crites ?? l???article 5.4
                  ci-dessous.
                </p>

                <p>
                  AUCUN REMBOURSEMENT NE SERA EFFECTUE EN CAS DE TENTATIVE
                  D'ANNULATION DE LA RESERVATION MOINS DE 24 HEURES AVANT
                  L???HEURE PREVUE.
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  4.Retard ou emp??chement de votre part
                </p>
                <p>
                  En dehors des cas d???annulation et de modification dans les
                  conditions de l???Article 3 ????Modifier et annuler la
                  R??servation??????:
                </p>
                <p style={{ marginLeft: 20 }}>
                  -En cas de retard de votre part la dur??e du rendez-vous sera
                  diminu??e proportionnellement au temps de retard??;
                </p>
                <p style={{ marginLeft: 20 }}>
                  -En cas d???emp??chement de votre part, la R??servation sera
                  consid??r??e comme annul??e et ne sera pas rembours??e??;
                </p>
                <p style={{ marginLeft: 20 }}>
                  -Si votre retard ou annulation r??sultent d???un cas de force
                  majeure (au sens de l???article 1218 du code civil), il pourra
                  vous ??tre propos?? de reporter la R??servation ou de l???annuler
                  contre remboursement, et si le rendez-vous doit avoir lieu
                  dans la boutique de l???Atelier F??lin, il pourra vous ??tre
                  propos?? d???effectuer le rendez-vous par appel vid??o sur une
                  application de messagerie (par exemple, WhatsApp).
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  5.Droit de r??tractation
                </p>
                <div style={{ marginLeft: 20 }}>
                  <p>5.1 Qu???est-ce que le droit de r??traction??? </p>
                  <p>
                    Conform??ment ?? l???article L.221-18 du Code de la consommation
                    et sous r??serve de l???Article 5.2 des pr??sentes, vous avez le
                    droit de vous r??tracter de votre commande sans avoir ??
                    donner de motif et sans p??nalit??s, dans un d??lai de quatorze
                    (14) jours ?? compter de la conclusion du contrat objet de
                    votre commande.{' '}
                  </p>
                  <br></br>
                  <p>
                    Le jour de la commande (et donc de l???acceptation des
                    pr??sentes Conditions) n???est pas inclus dans le d??lai de 14
                    jours. Le d??lai de 14 jours commence ?? courir au d??but de la
                    premi??re heure du premier jour et prend fin ?? l'expiration
                    de la derni??re heure du dernier jour du d??lai. Si ce d??lai
                    expire un samedi, un dimanche ou un jour f??ri?? ou ch??m??, il
                    est prorog?? jusqu'au premier jour ouvrable suivant.
                  </p>
                  <br></br>
                  <p>5.2 Cas o?? le droit de r??tractation ne peut ??tre exerc??</p>
                  <p>
                    Conform??ment ?? l???article L.221-28 du Code de la
                    consommation, l???exercice du droit de r??tractation ne peut
                    ??tre exerc?? pour les contrats de fourniture de services
                    pleinement ex??cut??s avant la fin du d??lai de r??tractation et
                    dont l'ex??cution a commenc?? apr??s accord pr??alable expr??s du
                    consommateur et renoncement expr??s ?? son droit de
                    r??tractation.
                  </p>
                  <br></br>
                  <p>
                    Ainsi, au moment du processus de commande, vous devez avoir
                    confirm?? que vous acceptez que le service soit ex??cut?? avant
                    la fin du d??lai l??gal de r??tractation (le cas ??ch??ant) et
                    que vous renoncez ?? votre droit de r??tractation.
                  </p>
                  <br></br>
                  <p>
                    Cette renonciation est sans pr??judice du droit d???annulation
                    vis?? ?? l???Article 3 ?? Modifier et annuler la R??servation ??,
                    que Royal Canin vous offre, ?? titre commercial.{' '}
                  </p>
                  <br></br>
                  <p>
                    5.3 Conditions d???exercice du droit de r??tractation
                    (lorsqu???applicable)??:{' '}
                  </p>
                  <p>
                    Pour exercer votre droit de r??tractation, vous devez
                    notifier ?? Royal Canin votre d??cision de r??tractation au
                    moyen d???une d??claration d??nu??e d???ambigu??t????avant
                    l'expiration du d??lai de r??tractation :{' '}
                  </p>
                  <p>
                    -Par courrier ?? l???adresse Royal Canin France SAS Service
                    Clients 650 Av de la Petite Camargue 30470 AIMARGUES??;{' '}
                  </p>
                  <p>-Par email ?? l???adresse??[to be completed] ; </p>
                  <p>
                    -En nous renvoyant le formulaire de r??tractation ci-dessous.{' '}
                  </p>
                  <br></br>
                  <p>Formulaire de r??tractation</p>
                  <br></br>
                  <p>
                    A l'attention de ROYAL CANIN France Service Clients 650 Av
                    de la Petite Camargue 30470 AIMARGUES ou [email address to
                    be completed].{' '}
                  </p>
                  <br></br>
                  <p>
                    Je/nous [*] vous notifie/notifions [*] par la pr??sente
                    ma/notre [*] r??tractation du contrat portant sur la
                    prestation de service ci-dessous :
                  </p>
                  <br></br>
                  <p>Command??e le : </p>
                  <br></br>
                  <p>Nom du (des) consommateur(s) : </p>
                  <br></br>
                  <p>Adresse du (des) consommateur(s) : </p>
                  <br></br>
                  <p>
                    Signature du (des) consommateur(s) (uniquement en cas de
                    notification du pr??sent formulaire sur papier) :{' '}
                  </p>
                  <br></br>
                  <p>Date : </p>
                  <br></br>
                  <p>(*) Rayez la mention inutile. </p>
                </div>
                <br></br>

                <p>
                  5.4 Effets de l???exercice du droit de r??tractation
                  (lorsqu???applicable)??:{' '}
                </p>
                <p>
                  En cas de r??tractation de votre part du pr??sent contrat, Royal
                  Canin vous remboursera tous les paiements re??us de votre part.
                  Le remboursement interviendra sans retard excessif et, en tout
                  ??tat de cause, au plus tard 14 jours ?? compter du jour o??
                  Royal Canin est inform?? de votre d??cision de r??tractation du
                  pr??sent contrat.
                </p>
                <br></br>
                <p>
                  Le d??lai dans lequel le remboursement de ce montant sera
                  r??percut?? sur votre carte de cr??dit / d??bit peut varier en
                  fonction des pratiques de votre banque, et Royal Canin ne peut
                  ??tre tenu pour responsable ?? cet ??gard. Royal Canin proc??dera
                  au remboursement en utilisant le m??me moyen de paiement que
                  celui que vous aurez utilis?? pour la transaction initiale,
                  sauf si vous convenez express??ment d???un moyen diff??rent ; en
                  tout ??tat de cause, ce remboursement n???occasionnera pas de
                  frais pour vous.{' '}
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  6.Limitation de la responsabilit??
                </p>
                <p>
                  Royal Canin ne sera pas responsable des dommages indirects qui
                  pourraient d??couler de toute violation des Conditions, de tout
                  d??lit ou de toute autre raison, en raison de l'acc??s au Site,
                  de l'utilisation du Site ou de toute autre donn??e ou programme
                  sur le Site, ainsi que des dommages indirects qui pourraient
                  d??couler de la R??servation.
                </p>
                <br></br>
                <p>
                  Royal Canin n'assume aucune responsabilit?? pour toute
                  inex??cution contractuelle, interruption des transactions
                  effectu??es via le Site, toute d??faillance ou n??gligence qui
                  est imputable au consommateur ou au fait impr??visible et
                  insurmontable d???un tiers au contrat ou ?? un cas de force
                  majeure.{' '}
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  7.Service Client{' '}
                </p>
                <p>
                  En cas de probl??me avec votre R??servation ou de question, vous
                  pouvez contacter Royal Canin par email ?? [to be completed], au
                  [to be completed] [days and time of availability to be
                  completed] (co??t d???un appel local).??{' '}
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  8.Donn??es personnelles
                </p>
                <p>
                  Royal Canin peut collecter et traiter plusieurs cat??gories de
                  donn??es personnelles que vous fournissez. Royal Canin
                  conservera vos donn??es personnelles de mani??re s??curis??e. Pour
                  plus d???informations, veuillez consulter la Politique de
                  confidentialit?? https://www.mars.com/privacy-policy-france.{' '}
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>9.M??diation</p>
                <p>
                  Conform??ment aux dispositions du Code de la consommation
                  concernant le r??glement amiable des litiges, Royal Canin
                  adh??re au Service du M??diateur du e-commerce de la FEVAD
                  (F??d??ration du e-commerce et de la vente ?? distance) dont les
                  coordonn??es sont les suivantes : 60 Rue La Bo??tie ??? 75008
                  Paris ??? http://www.mediateurfevad.fr. Apr??s d??marche pr??alable
                  ??crite des consommateurs vis-??-vis de Royal Canin, le Service
                  du M??diateur peut ??tre saisi pour tout litige de consommation
                  dont le r??glement n???aurait pas abouti. Pour conna??tre les
                  modalit??s de saisie du M??diateur, cliquer??ici.
                </p>
                <p>En toutes hypoth??ses, Royal Canin vous :</p>
                <p>???fera part de son incapacit?? ?? r??soudre le litige, et</p>
                <p>
                  ???fournira ?? ce moment-l?? les informations pr??vues par la loi
                  concernant le m??diateur, y compris ses coordonn??es, telles
                  qu'expos??es ci-dessus.
                </p>
                <br></br>
                <p>
                  Vous pouvez ??galement utiliser la plateforme de r??solution des
                  litiges en ligne afin de r??soudre le litige via
                  :????https://webgate.ec.europa.eu/odr/main/?event=main.home.show&lng=FR.
                </p>
                <br></br>
                <p>
                  Le fait de consentir ?? la m??diation n'affectera pas votre
                  droit de voir le litige port?? devant un tribunal.
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  10.Propri??t?? intellectuelle
                </p>
                <p>
                  Royal Canin reste seule propri??taire et titulaire des droits
                  sur tous les documents et informations fournis sur ou par le
                  biais du Site, y compris toutes les illustrations, graphiques,
                  textes, clips vid??o et audio, marques, logos et autres
                  contenus (collectivement appel??s "Contenu Royal Canin").
                </p>
                <br></br>
                <p>
                  Si vous acceptez les pr??sentes Conditions (et toute condition
                  suppl??mentaire relative ?? un Contenu Royal Canin sp??cifique),
                  vous pouvez t??l??charger, imprimer et/ou copier le Contenu
                  Royal Canin pour votre usage personnel uniquement.
                </p>
                <br></br>
                <p>
                  Sauf autorisation ??crite de Royal Canin, vous ne pouvez
                  effectuer aucune des actions suivantes??:
                </p>
                <br></br>
                <p>
                  -Incorporer le Contenu Royal Canin dans une autre ??uvre (comme
                  sur votre propre site web) ou utiliser le Contenu Royal Canin
                  ?? des fins publiques ou commerciales,
                </p>
                <p>
                  -Copier, modifier, reproduire, adapter, d??sosser, distribuer,
                  encadrer, republier, t??l??charger, afficher, montrer, publier,
                  transmettre, transf??rer, conc??der sous licence ou vendre le
                  contenu Royal Canin sous quelque forme et par quelque moyen
                  que ce soit,
                </p>
                <p>
                  -Modifier une information concernant les droits d'auteur, les
                  marques de commerce ou tout autre droit de propri??t??
                  intellectuelle relatif au Contenu Royal Canin, ou
                </p>
                <p>
                  -??tablir un "lien invisible" vers une page du Site
                  (c'est-??-dire un lien vers une page diff??rente de la page
                  d'accueil du Site).
                </p>
                <br></br>
                <p style={{ fontSize: 16, fontWeight: 'bold' }}>
                  11.Droit applicable et tribunal comp??tent
                </p>
                <p>
                  En cas de litige pouvant d??couler des pr??sentes Conditions et
                  de l'utilisation du Site, les dispositions des pr??sentes
                  Conditions seront applicables en priorit??, et si les pr??sentes
                  Conditions ne contiennent aucune disposition pertinente, la
                  l??gislation fran??aise sera applicable. Tout litige d??coulant
                  de ou en relation avec ces Conditions et l'utilisation du Site
                  sera soumis aux tribunaux fran??ais comp??tents.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default FelinTermsConditions;
