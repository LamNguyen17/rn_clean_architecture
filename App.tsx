import React, { useEffect } from 'react';

import Photo from 'presentation/features/photo';
import remoteConfig from '@react-native-firebase/remote-config';
import { RemoteConfigHelper } from 'common/helper/RemoteConfigHelper';
import { EncryptionChannel } from 'common/modules/EncryptionChannel';

const App = () => {
  useEffect(() => {
    firebaseRemoteConfig().then();
  }, []);

  const firebaseRemoteConfig = async () => {
    remoteConfig()
      .fetch(500)
      .then(() =>
        remoteConfig()
          .activate()
          .then((activated) => {
            if (!activated) {
              return remoteConfig()
                .fetch()
                .then(async () => {
                  const secretKey = remoteConfig().getValue('secret_key');
                  const ivKey = remoteConfig().getValue('iv_key');
                  const pixabayKey = remoteConfig().getValue('pixabay_key');
                  let decryptApiKey = await EncryptionChannel.decryptData(pixabayKey.asString(), secretKey.asString(), ivKey.asString());
                  RemoteConfigHelper.setApiKey(decryptApiKey);
                  console.log('parameters: ', pixabayKey.asString());
                  console.log('decryptApiKey: ', decryptApiKey);
                });
            }
          }),
      );
  };

  return <Photo/>;
};
export default App;
