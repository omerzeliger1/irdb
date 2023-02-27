import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,searchCircleOutline, trashOutline, trashSharp, warningOutline, warningSharp,restaurantOutline, duplicateOutline,logInOutline ,logOutOutline,apertureOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'המסעדות הפופלאריות',
    url: '/page/poplarRest',
    iosIcon: mailOutline,
    mdIcon: restaurantOutline
  },
  {
    title: 'חיפוש ',
    url: '/page/search',
    iosIcon: paperPlaneOutline,
    mdIcon: searchCircleOutline
  },
  {
    title: 'הוסף ביקורת',
    url: '/page/addReview',
    iosIcon: heartOutline,
    mdIcon: duplicateOutline
  },
  {
    title: 'הירשם',
    url: '/page/logIn',
    iosIcon: archiveOutline,
    mdIcon: logInOutline
  },
  {
    title: 'התנתק',
    url: '/page/logOut',
    iosIcon: trashOutline,
    mdIcon: logOutOutline
  },
  {
    title: 'היסטורית החיפוש',
    url: '/page/history',
    iosIcon: warningOutline,
    mdIcon: apertureOutline
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
