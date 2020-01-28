import React from 'react';
import { useParams } from 'react-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab3Page: React.FC = () => {
  let { groupName } = useParams<{ groupName: string }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three for {groupName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default Tab3Page;
