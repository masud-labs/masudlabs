import {AppCategory, AppPlatform, AppRecord, AppStatus} from '../types/app';

export const APP_CATEGORIES: AppCategory[] = [
  'Finance',
  'Productivity',
  'Utilities',
  'Communication',
  'Games',
  'Entertainment',
  'Other',
];

export const APP_PLATFORMS: AppPlatform[] = ['Android', 'Web', 'Android + Web'];

export const APP_STATUSES: AppStatus[] = [
  'Published',
  'Beta',
  'In Development',
  'Ready for Release',
  'Coming Soon',
];

/**
 * Centralized application directory database.
 * Adding a new AppRecord here automatically creates:
 * - Directory card entry in /apps
 * - Dedicated landing page at /apps/{slug}
 * - Dedicated Privacy Policy at /apps/{slug}/privacy-policy
 * - Dedicated Terms of Service at /apps/{slug}/terms-of-service
 * - Dedicated Data Deletion guide at /apps/{slug}/data-deletion
 * - Support pre-selection in /contact and Legal Center listing in /legal
 */
export const APPS_DATA: AppRecord[] = [
  {
    id: 'takalog-money-tracker',
    slug: 'takalog-money-tracker',
    name: 'Takalog Money Tracker',
    shortDescription:
      'A personal money management application designed to help users track income, expenses, balances, and financial activities.',
    longDescription:
      'Takalog Money Tracker is a personal finance companion currently in development at Masud Labs. It is designed to give individuals a clear, structured record of their everyday income, expenses, and account balances without unnecessary complexity. Architectural planning includes optional local-first storage alongside configurable cloud synchronization and user-initiated backup workflows.',
    category: 'Finance',
    platform: 'Android',
    status: 'In Development',
    iconKey: 'takalog',
    accent: 'violet',
    featured: true,
    screenshots: [],
    features: [
      {
        title: 'Income and Expense Tracking',
        description:
          'Record daily financial transactions across custom categories and review running balances.',
        state: 'planned',
      },
      {
        title: 'Local Data Storage',
        description:
          'Store personal financial logs locally on the Android device for offline access.',
        state: 'planned',
      },
      {
        title: 'Google Sign-In Integration',
        description:
          'Configurable authentication option to associate optional cloud backups with a user Google account.',
        state: 'planned',
      },
      {
        title: 'Cloud Synchronization',
        description:
          'Planned synchronization support using cloud database infrastructure so records stay accessible across devices.',
        state: 'planned',
      },
      {
        title: 'Google Drive App-Private Backup',
        description:
          'Configurable backup and restore using the restricted Google Drive appDataFolder scope, isolated from other Drive files.',
        state: 'planned',
      },
      {
        title: 'Manual Backup and Restore',
        description:
          'User-initiated export and restore controls to help manage personal ledger backups.',
        state: 'planned',
      },
    ],
   
privacyPolicy: {
  isDraftNotice: false,
  lastUpdated: 'November 24, 2026',

  introduction:
    'TakaLog Money Tracker is an offline-first personal finance application developed by Masud Labs. This Privacy Policy explains how the app handles information when you use its financial tracking, Google Sign-In, and optional Google Drive backup features.',

  informationCollected: [
    'Financial information entered by users, including income, expenses, transaction amounts, dates, categories, descriptions, and optional notes.',
    'Lend-and-borrow records and related information entered by users, such as names, contact details, amounts, dates, and notes where provided.',
    'Google account information when users choose Google Sign-In, including account identifier, email address, display name, and profile photo URL when available.',
    'Application preferences and settings required to operate the app.',
  ],

  informationProcessed: [
    'Financial records are processed locally on the device to calculate balances, summaries, and transaction reports.',
    'When Google Drive backup is enabled, the app creates encrypted backup archives and uploads them to the connected Google account.',
    'When a user restores a backup, the selected backup archive is downloaded and processed by the app.',
  ],

  devicePermissions: [
    {
      permission: 'Internet Access',
      purpose:
        'Required for Google Sign-In and optional Google Drive backup and restore operations.',
    },
    {
      permission: 'Network State',
      purpose:
        'Used to determine network connectivity for backup operations.',
    },
    {
      permission: 'Notifications',
      purpose:
        'Used for app notifications and background backup-related notifications where applicable.',
    },
    {
      permission: 'Biometric Authentication',
      purpose:
        'Used to support biometric authentication features where enabled by the user.',
    },
  ],

  googleSignIn: {
    applicable: true,
    details:
      'TakaLog uses Google Sign-In through Android Credential Manager. If you choose to connect a Google account, the app receives account identification information such as your Google account identifier, email address, display name, and profile photo URL when available. This information is used to identify the connected account for optional Google Drive backup. The app does not receive your Google account password.',
  },

  googleDriveApi: {
    applicable: true,
    details:
      'TakaLog uses the Google Drive API with the https://www.googleapis.com/auth/drive.appdata scope. This permission allows the app to store and manage its own backup files in the private Google Drive appDataFolder. It does not provide access to your ordinary Google Drive files. Backup files use the .tkb format and are encrypted using AES-256-GCM before upload. The app supports uploading, listing, downloading, restoring, and deleting its backup files.',
  },

  dataStorageAndSecurity:
    'TakaLog stores financial records locally using a Room/SQLite database on your Android device. Optional Google Drive backup archives are encrypted using AES-256-GCM before being uploaded over HTTPS. No electronic storage or transmission method can be guaranteed completely secure. Users should protect their devices, Google accounts, and backup recovery information.',

  dataSharing:
    'Masud Labs does not sell, rent, or trade users’ personal or financial information. Information is transmitted to Google when users choose Google Sign-In or Google Drive backup. Google processes information under its own privacy policies and terms. The reviewed application source does not include advertising or analytics SDK integrations.',

  dataRetention:
    'Local financial records remain on your device until you delete them, clear the app storage, or uninstall the app. Google Drive backup files remain in the app-private appDataFolder until deleted through the app or managed through your Google Account. Disconnecting Google Drive stops the app’s backup connection but does not automatically delete previously uploaded backup files.',

  userRights: [
    'Access and manage financial records stored locally in the app.',
    'Export or restore backup files using the available backup features.',
    'Disconnect Google Drive access through the app or revoke access through Google Account settings.',
    'Delete available cloud backup files through the app’s backup management interface.',
    'Contact Masud Labs for privacy-related questions or assistance.',
  ],

  accountAndDataDeletion:
    'You can remove local app data by clearing the app storage or uninstalling TakaLog. You can delete available Google Drive backup files through the app’s backup management interface. Disconnecting Google Drive alone does not delete existing backup files. For assistance, contact masudlabssupport@gmail.com or follow the instructions on the TakaLog Data Deletion page.',

  childrensPrivacy:
    'TakaLog is not specifically designed for children under the age of 13. Masud Labs does not knowingly collect personal information from children through a separate account registration system.',

  policyChanges:
    'Masud Labs may update this Privacy Policy when app functionality, data handling practices, or applicable legal requirements change. Updated versions will be published on this page with a revised effective date.',
},

   
  termsOfService: {
      isDraftNotice: true,
      lastUpdated: 'November 24, 2026',
      acceptanceOfTerms:
        'By installing, accessing, or using TakaLog Money Tracker, you agree to these Terms of Service. If you do not agree, do not use the application.',
      permittedUse:
        'TakaLog is an offline-first personal finance record-keeping application for recording and reviewing income, expenses, account balances, categories, and personal lend-and-borrow records. It is provided for personal use and is not a bank, payment service, accounting service, or financial advisory service.',
      userResponsibilities: [
        'You are responsible for the accuracy and lawfulness of the financial entries and personal details you enter, including names, phone numbers or notes, amounts, dates, and reminders in lend-and-borrow records.',
        'Keep your Android device and any Google Account used with TakaLog secure. Only connect a Google Account that you are authorized to use.',
        'If you use encrypted backup and restore, keep your recovery passphrase safe. A backup may not be recoverable if the required passphrase is lost or forgotten.',
        'Check that backups complete successfully and keep a separate copy of important exported backup files. Disconnecting Google Drive does not delete backup files already stored there.',
        'Use the application only for lawful personal purposes. Do not attempt unauthorized access to another person’s device, Google Account, or data, or interfere with the application or its services.',
      ],
      intellectualProperty:
        'The TakaLog application, its original source code, interface, branding, graphics, and documentation are owned by Masud Labs, except for third-party components governed by their own licenses and terms.',
      serviceAvailability:
        'TakaLog is currently listed as In Development. Features and availability may change during development. The application is provided without a guarantee of uninterrupted, error-free, or permanently available operation. Google Sign-In and Google Drive functions also depend on services operated by Google.',
      thirdPartyServices:
        'The inspected TakaLog source uses Android Credential Manager for Google Sign-In and the Google Drive API with the https://www.googleapis.com/auth/drive.appdata scope for optional backup and restore in the private Google Drive appDataFolder. The inspected source does not implement Firebase Authentication, Cloud Firestore, or a Masud Labs hosted account or financial-record synchronization backend. Google services are provided by Google LLC and are subject to Google’s own terms and privacy policies.',
      disclaimer:
        'TakaLog is a personal record-keeping tool. It does not connect to banks or verify transactions with financial institutions, and it does not provide financial, banking, tax, investment, accounting, or legal advice. You should independently verify important records and decisions. To the maximum extent permitted by law, the application is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.',
      limitationOfLiability:
        'To the maximum extent permitted by applicable law, Masud Labs will not be liable for indirect, incidental, special, consequential, or financial losses arising from use or inability to use TakaLog, inaccurate user-entered records, device loss or failure, forgotten recovery passphrases, failed or unavailable backups, or interruptions or changes to Google services. Nothing in these terms excludes liability that cannot lawfully be excluded.',
      changesToTerms:
        'Masud Labs may update these Terms when the application, its services, or applicable requirements change. The revised version and its effective date will be published on this page. Where required by applicable law, users will be notified of material changes.',
    },
    dataDeletion: {
      isDraftNotice: true,
      lastUpdated: 'November 24, 2026',
      accountDeletionInstructions: [
        'TakaLog does not create a separate Masud Labs hosted user account. Google Sign-In is used to identify the Google account connected to the optional Google Drive backup feature; the inspected source stores the connected account details in the app’s local preferences.',
        'To remove the Google account connection from TakaLog, open the app’s Backup & Restore screen and use Disconnect. This removes the app’s locally stored connected-account state and stops the current connection; it does not delete backup files already stored in Google Drive.',
        'If you also want to revoke TakaLog’s Google authorization, review the third-party app access section of your Google Account and remove TakaLog’s access there. Revoking access alone should not be treated as confirmation that existing backup files have been deleted.',
        'For help understanding these steps, contact masudlabssupport@gmail.com. Masud Labs cannot directly browse or delete files in your private Google Drive appDataFolder from a hosted account system because the inspected source contains no such backend.',
      ],
      personalDataDeletionInstructions: [
        'To erase TakaLog data stored on your Android device, open Android Settings > Apps > TakaLog Money Tracker > Storage > Clear storage / Clear data. The exact wording may vary by Android version and device manufacturer.',
        'Alternatively, uninstall TakaLog. The inspected Android manifest disables Android app backup (android:allowBackup="false"). Clearing storage or uninstalling removes the app’s local database and preferences, including locally stored transaction, category, lend-and-borrow, app-setting, and connected-account data.',
        'If you exported a local .tkb backup through Android’s file picker, that file is saved to a location you selected and is outside the app’s private storage. Find and delete that exported file separately if you no longer want to retain it.',
        'Deleting local app data does not delete Google Drive backups. Follow the cloud-backup deletion steps below as a separate action.',
      ],
      cloudDataHandling:
        'Optional cloud backups are encrypted .tkb archives stored in the connected Google Account’s private Google Drive appDataFolder. The inspected backup serializer includes app settings, categories, financial transactions, lend-and-borrow people, and lend-and-borrow entries in the archive. The source implements in-app listing and deletion of individual remote backup files. Before deleting them, open Backup & Restore while the Google Account is still connected, turn off Auto Background Backup, then use the delete control beside each listed Google Drive backup and repeat until the list is empty. Verify the list is empty before disconnecting the account. Disconnecting Google Drive, signing out, clearing app storage, or uninstalling TakaLog does not itself delete already uploaded Drive backup files. The inspected source does not use Firebase or a separate cloud database for financial-record synchronization.',
      localDataHandling:
        'The app stores financial records in a local Room / SQLite database and app preferences in Android DataStore. Clearing app storage or uninstalling removes this app-private local data. This is permanent unless you have a usable backup. Exported .tkb files saved through the Android file picker are stored wherever you chose and must be deleted separately. Do not clear storage or uninstall until you have exported anything you want to keep.',
      supportNotes:
        'For assistance understanding local-data removal, Google account disconnection, or the in-app Drive backup deletion steps, contact masudlabssupport@gmail.com. Please do not email financial records, backup files, Google passwords, access tokens, or recovery passphrases.',
    },
  },


  {
    id: 'activity-calendar',
    slug: 'activity-calendar',
    name: 'Activity Calendar / Notes',
    shortDescription:
      'A productivity application for organizing activities, notes, and calendar-related information.',
    longDescription:
      'Activity Calendar / Notes is an Android productivity application in development by Masud Labs. It aims to bring scheduled activities, daily reminders, and structured personal notes together in a calm, distraction-free mobile workspace.',
    category: 'Productivity',
    platform: 'Android',
    status: 'In Development',
    iconKey: 'calendar',
    accent: 'cyan',
    featured: true,
    screenshots: [],
    features: [
      {
        title: 'Activity & Schedule Organization',
        description:
          'Organize daily tasks, events, and recurring activities by calendar date.',
        state: 'planned',
      },
      {
        title: 'Integrated Personal Notes',
        description:
          'Capture quick notes and attach contextual details directly alongside calendar entries.',
        state: 'planned',
      },
      {
        title: 'On-Device Storage Focus',
        description:
          'Designed to keep personal schedules and notes fast and accessible on the device.',
        state: 'planned',
      },
    ],
    privacyPolicy: {
      isDraftNotice: true,
      introduction:
        'This Privacy Policy outlines the planned privacy practices for Activity Calendar / Notes by Masud Labs. This document will be finalized and verified before the application is published.',
      informationCollected: [
        'Calendar events, activity titles, and personal notes entered directly by the user.',
        'No external account or cloud collection is confirmed unless explicitly enabled and disclosed at release.',
      ],
      informationProcessed: [
        'Rendering calendar views, organizing notes, and triggering user-configured reminders locally on the Android device.',
      ],
      devicePermissions: [
        {
          permission: 'Notifications (Planned, Optional)',
          purpose:
            'Used only if the user schedules activity reminders that require local device notifications.',
        },
      ],
      googleSignIn: {
        applicable: false,
        details:
          'Google Sign-In is not currently configured for Activity Calendar / Notes.',
      },
      firebaseServices: {
        applicable: false,
        details:
          'Cloud database synchronization is not currently configured for Activity Calendar / Notes.',
      },
      googleDriveApi: {
        applicable: false,
        details:
          'Google Drive API integration is not currently configured for Activity Calendar / Notes.',
      },
      dataStorageAndSecurity:
        'User-created activities and notes are planned to be stored locally on the user device. Security and backup behaviors will be verified and updated in this policy prior to release.',
      dataSharing:
        'Masud Labs does not sell or rent user data. If any optional third-party services are introduced in future versions, this policy will be updated accordingly before release.',
      dataRetention:
        'Locally stored activities and notes remain on the device until edited or deleted by the user, or until the app is uninstalled.',
      userRights: [
        'Edit or delete any activity or note inside the application.',
        'Contact masudlabssupport@gmail.com with any privacy questions.',
      ],
      accountAndDataDeletion:
        'Because no remote user account is currently required, clearing app storage or uninstalling the application removes locally stored entries. Support inquiries can be sent to masudlabssupport@gmail.com.',
      childrensPrivacy:
        'Activity Calendar / Notes is not directed to children under 13 and does not knowingly collect personal data from children.',
      policyChanges:
        'This policy may be updated prior to public launch and whenever application capabilities change.',
    },
    termsOfService: {
      isDraftNotice: true,
      acceptanceOfTerms:
        'By using Activity Calendar / Notes upon release, you agree to these Terms of Service.',
      permittedUse:
        'The application is intended for personal scheduling, note-taking, and productivity organization.',
      userResponsibilities: [
        'Maintain backups of critical notes or schedule data as appropriate.',
        'Use device notifications responsibly according to your local environment.',
      ],
      intellectualProperty:
        'All branding, interface design, and original source code for Activity Calendar / Notes belong to Masud Labs.',
      serviceAvailability:
        'The application is currently in development. Features, layout, and release timelines are subject to change.',
      thirdPartyServices:
        'If optional platform services are integrated in future releases, their respective terms will be disclosed prior to use.',
      disclaimer:
        'Activity Calendar / Notes is provided "AS IS" without warranty of uninterrupted operation or reminder delivery across all manufacturer battery-optimization settings.',
      limitationOfLiability:
        'To the fullest extent permitted by law, Masud Labs is not liable for missed reminders, scheduling conflicts, or loss of locally stored notes.',
      changesToTerms:
        'Masud Labs may update these terms before and after release by publishing revised terms on this page.',
    },
    dataDeletion: {
      isDraftNotice: true,
      accountDeletionInstructions: [
        'Activity Calendar / Notes does not currently require a Masud Labs cloud account.',
        'If you ever need assistance regarding data stored or submitted through support channels, email masudlabssupport@gmail.com.',
      ],
      personalDataDeletionInstructions: [
        'All notes and calendar entries created in the offline app can be deleted directly within the application or via Android device settings.',
      ],
      cloudDataHandling:
        'No cloud database is currently active for this application. Should cloud backup be added in a future release, detailed cloud deletion steps will be published here prior to launch.',
      localDataHandling:
        'Open Android Settings > Apps > Activity Calendar / Notes > Storage > Clear Storage, or uninstall the app to permanently remove local data from your device.',
      supportNotes:
        'Questions can always be sent to masudlabssupport@gmail.com.',
    },
  },
  {
    id: 'my-phone-remote-control',
    slug: 'my-phone-remote-control',
    name: 'My Phone Remote Control',
    shortDescription:
      'An Android device companion concept with Telegram integration.',
    longDescription:
      'My Phone Remote Control is an early-stage Android device companion concept from Masud Labs exploring Telegram integration. As the project is currently in development, only finalized and verified capabilities will be documented here as implementation progresses.',
    category: 'Utilities',
    platform: 'Android',
    status: 'In Development',
    iconKey: 'remote',
    accent: 'indigo',
    featured: true,
    screenshots: [],
    features: [
      {
        title: 'Android Companion Architecture',
        description:
          'Foundational Android utility concept designed around user-authorized companion workflows.',
        state: 'planned',
      },
      {
        title: 'Telegram Bot Integration Concept',
        description:
          'Exploring structured, user-configured communication via the Telegram Bot API.',
        state: 'planned',
      },
    ],
    privacyPolicy: {
      isDraftNotice: true,
      introduction:
        'This Privacy Policy serves as a preliminary framework for My Phone Remote Control by Masud Labs. Specific permissions, Telegram communication behavior, and data handling practices will be strictly documented and verified before any release.',
      informationCollected: [
        'Only configuration parameters explicitly entered by the user (such as user-owned Telegram bot configuration) if implemented in a released build.',
        'No hidden background telemetry or unauthorized data collection is intended.',
      ],
      informationProcessed: [
        'Processing user-initiated commands or status messages solely within the scope authorized by the user.',
      ],
      devicePermissions: [
        {
          permission: 'To Be Determined Prior to Release',
          purpose:
            'Only minimal Android permissions strictly required for implemented and user-authorized companion features will be requested and documented here.',
        },
      ],
      googleSignIn: {
        applicable: false,
        details: 'Google Sign-In is not currently planned for this utility.',
      },
      firebaseServices: {
        applicable: false,
        details: 'Firebase services are not currently configured for this utility.',
      },
      googleDriveApi: {
        applicable: false,
        details: 'Google Drive API is not currently used by this utility.',
      },
      dataStorageAndSecurity:
        'Configuration data handling and credential storage practices will be audited and accurately described prior to public release.',
      dataSharing:
        'Masud Labs does not sell user data. Messages routed through user-configured Telegram bots are subject to Telegram’s network and privacy policies.',
      dataRetention:
        'Local settings remain on the user device until cleared or uninstalled.',
      userRights: [
        'Revoke bot tokens or disable companion integrations at any time.',
        'Request clarification on data practices at masudlabssupport@gmail.com.',
      ],
      accountAndDataDeletion:
        'Users can delete local configuration data from Android App Settings or uninstall the app. Contact masudlabssupport@gmail.com for additional support.',
      childrensPrivacy:
        'My Phone Remote Control is a technical utility not intended for children under 13.',
      policyChanges:
        'This policy will be updated once core features are finalized for beta or production release.',
    },
    termsOfService: {
      isDraftNotice: true,
      acceptanceOfTerms:
        'By installing or using My Phone Remote Control upon release, you agree to comply with these Terms of Service.',
      permittedUse:
        'The application may only be used on Android devices that you own or have explicit legal authorization to manage.',
      userResponsibilities: [
        'Keep any personal API tokens or Telegram bot credentials strictly confidential.',
        'Comply with Telegram’s Terms of Service and all applicable local laws.',
        'Never use companion utilities for unauthorized access to another person’s device.',
      ],
      intellectualProperty:
        'Masud Labs retains ownership of the My Phone Remote Control application code, branding, and documentation.',
      serviceAvailability:
        'This project is currently an early-stage concept in development and is not yet publicly distributed.',
      thirdPartyServices:
        'Telegram integration depends on the third-party Telegram platform and is subject to its availability and terms.',
      disclaimer:
        'The software is provided "AS IS" without warranties of fitness for critical or emergency device management.',
      limitationOfLiability:
        'Masud Labs is not liable for unauthorized access resulting from compromised user tokens, third-party platform outages, or misuse.',
      changesToTerms:
        'Terms may be updated before any public beta or production release.',
    },
    dataDeletion: {
      isDraftNotice: true,
      accountDeletionInstructions: [
        'My Phone Remote Control does not maintain a Masud Labs user account database.',
        'If you previously shared diagnostic feedback via email, you may request deletion of those emails by contacting masudlabssupport@gmail.com.',
      ],
      personalDataDeletionInstructions: [
        'Remove any configured Telegram bot tokens directly in your Telegram @BotFather settings and within the app configuration.',
      ],
      cloudDataHandling:
        'Masud Labs does not host a cloud backend for this concept. Any messages sent through Telegram are governed by Telegram’s data deletion controls.',
      localDataHandling:
        'Clearing app storage in Android Settings or uninstalling the application deletes all local configuration data.',
      supportNotes:
        'Reach out to masudlabssupport@gmail.com with any data deletion questions.',
    },
  },
  {
    id: 'candy-puzzle',
    slug: 'candy-puzzle',
    name: 'Candy Puzzle',
    shortDescription:
      'A colorful candy-themed puzzle game with progressive levels.',
    longDescription:
      'Candy Puzzle is an upcoming casual mobile puzzle game from Masud Labs. Designed around crisp visual feedback, tactile matching mechanics, and progressive level challenges, it aims to deliver approachable puzzle gameplay for quick breaks or longer sessions.',
    category: 'Games',
    platform: 'Android',
    status: 'In Development',
    iconKey: 'candy',
    accent: 'teal',
    featured: true,
    screenshots: [],
    features: [
      {
        title: 'Progressive Level Design',
        description:
          'Structured puzzle stages that gradually introduce new board layouts and objectives.',
        state: 'planned',
      },
      {
        title: 'Clean Mobile Controls',
        description:
          'Touch-responsive puzzle board tuned for smooth play on Android phones and tablets.',
        state: 'planned',
      },
      {
        title: 'Offline-Friendly Gameplay',
        description:
          'Core puzzle levels designed to be playable without requiring a constant internet connection.',
        state: 'planned',
      },
    ],
    privacyPolicy: {
      isDraftNotice: true,
      introduction:
        'This Privacy Policy applies to Candy Puzzle, a mobile game in development by Masud Labs. Data practices will be finalized and verified before publishing on Google Play.',
      informationCollected: [
        'Local game progress (such as unlocked levels, scores, and sound preferences) saved on your device.',
        'If advertising, analytics, or cloud leaderboards are added prior to release, those specific disclosures will be updated here before launch.',
      ],
      informationProcessed: [
        'Saving gameplay progress and audio/display preferences locally on the device.',
      ],
      devicePermissions: [
        {
          permission: 'Standard Vibration / Haptics (Optional)',
          purpose: 'Used for optional tactile feedback during puzzle interactions.',
        },
      ],
      googleSignIn: {
        applicable: false,
        details: 'Google Sign-In is not currently configured for Candy Puzzle.',
      },
      firebaseServices: {
        applicable: false,
        details: 'Firebase services are not currently configured for Candy Puzzle.',
      },
      googleDriveApi: {
        applicable: false,
        details: 'Google Drive API is not used by Candy Puzzle.',
      },
      dataStorageAndSecurity:
        'Game progress is intended to be stored locally on the device. Any third-party SDKs added before launch will be listed transparently prior to release.',
      dataSharing:
        'Masud Labs does not sell player data. No third-party data sharing is active in the current development scope.',
      dataRetention:
        'Local progress persists on the device until reset or until the game is uninstalled.',
      userRights: [
        'Reset local game progress at any time.',
        'Contact masudlabssupport@gmail.com for privacy inquiries.',
      ],
      accountAndDataDeletion:
        'Uninstalling Candy Puzzle or clearing app storage removes all locally stored progress.',
      childrensPrivacy:
        'Masud Labs aims to respect applicable children’s privacy regulations, including Google Play Families policies if applicable at release.',
      policyChanges:
        'This policy will be reviewed and updated prior to public distribution.',
    },
    termsOfService: {
      isDraftNotice: true,
      acceptanceOfTerms:
        'By downloading or playing Candy Puzzle upon release, you agree to these Terms of Service.',
      permittedUse:
        'Candy Puzzle is licensed for personal, non-commercial entertainment on compatible Android devices.',
      userResponsibilities: [
        'Use the game fairly without tampering with application files or score data.',
      ],
      intellectualProperty:
        'All game mechanics implementation, graphics, audio assets, and the Candy Puzzle title are owned by or licensed to Masud Labs.',
      serviceAvailability:
        'Candy Puzzle is currently in development; gameplay details and availability are subject to change.',
      thirdPartyServices:
        'Distribution through platforms such as Google Play is also subject to the storefront’s terms.',
      disclaimer:
        'Candy Puzzle is provided "AS IS" without warranties regarding device compatibility across all hardware models.',
      limitationOfLiability:
        'To the maximum extent permitted by law, Masud Labs is not liable for loss of locally saved game progress.',
      changesToTerms:
        'Masud Labs may update these Terms of Service as the game progresses toward release.',
    },
    dataDeletion: {
      isDraftNotice: true,
      accountDeletionInstructions: [
        'Candy Puzzle does not currently require a player account.',
        'If you contacted support regarding Candy Puzzle and wish to have your support correspondence deleted, email masudlabssupport@gmail.com.',
      ],
      personalDataDeletionInstructions: [
        'All locally stored scores and level progress can be removed directly from your Android device.',
      ],
      cloudDataHandling:
        'No remote player data storage is currently active. If optional cloud save is introduced in a future update, cloud deletion steps will be added here.',
      localDataHandling:
        'Go to Android Settings > Apps > Candy Puzzle > Storage > Clear Storage, or uninstall the game to remove all local progress.',
      supportNotes:
        'For support or deletion requests, email masudlabssupport@gmail.com.',
    },
  },
];

export function getAppBySlug(slug: string | undefined): AppRecord | undefined {
  if (!slug) return undefined;
  return APPS_DATA.find((app) => app.slug === slug);
}

export function getFeaturedApps(): AppRecord[] {
  return APPS_DATA.filter((app) => app.featured);
}
