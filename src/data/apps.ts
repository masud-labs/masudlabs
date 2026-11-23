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
      isDraftNotice: true,
      introduction:
        'This Privacy Policy describes how Takalog Money Tracker, developed by Masud Labs, intends to handle user information. Because the application is currently in active development, specific data flows listed below reflect the planned architecture and will be finalized and verified prior to public release on Google Play.',
      informationCollected: [
        'Financial entries voluntarily created by the user within the app (such as transaction amounts, categories, dates, and optional notes).',
        'Basic Google account profile details (such as email address, display name, and user identifier) only if the user chooses to enable Google Sign-In.',
        'Technical diagnostic or crash logs only if crash-reporting services are enabled in a released build.',
      ],
      informationProcessed: [
        'Processing transaction entries locally on the device to compute balances, summaries, and category totals.',
        'Synchronizing user-authorized records or creating user-initiated backups when cloud features are enabled.',
      ],
      devicePermissions: [
        {
          permission: 'Network / Internet Access',
          purpose:
            'Required only when optional cloud synchronization, Google Sign-In, or Google Drive backup features are used.',
        },
      ],
      googleSignIn: {
        applicable: true,
        details:
          'Takalog Money Tracker includes configurable support for Google Sign-In. When enabled and authorized by the user, Google Sign-In provides an authenticated user identity used solely to connect optional cloud synchronization or Google Drive backup functionality. Masud Labs does not receive or store your Google account password.',
      },
      firebaseServices: {
        applicable: true,
        details:
          'If cloud synchronization is enabled in the released version, Takalog Money Tracker may utilize Google Firebase Authentication and Cloud Firestore to authenticate sessions and store synchronized user ledger records under the authenticated account.',
      },
      googleDriveApi: {
        applicable: true,
        details:
          'If Google Drive backup is enabled and explicitly authorized by the user, the application requests access strictly to the Google Drive appDataFolder scope (https://www.googleapis.com/auth/drive.appdata). This hidden, app-specific folder only stores Takalog Money Tracker backup files and does not grant the app permission to view, modify, or delete any other files in your personal Google Drive.',
      },
      dataStorageAndSecurity:
        'Financial records entered offline are stored locally on the user device. When optional cloud synchronization or Google Drive backup is enabled, data is transmitted to the respective Google or Firebase services over standard platform connections. Specific storage safeguards and encryption details will be documented once the production build is finalized.',
      dataSharing:
        'Masud Labs does not sell, rent, or trade user financial records or personal information to third parties. Data is shared only with infrastructure providers strictly required to operate user-enabled features (such as Google Sign-In, Firebase, or Google Drive) or when required by applicable law.',
      dataRetention:
        'Local data remains on the user device until deleted by the user or when the application is uninstalled. Cloud-synchronized data or app-private Drive backups remain until removed by the user or deleted following a verified support request.',
      userRights: [
        'Access and review the financial entries stored in your local ledger.',
        'Revoke Google Drive or Google Sign-In permissions at any time through your Google Account security settings.',
        'Request deletion of associated cloud records by contacting masudlabssupport@gmail.com.',
      ],
      accountAndDataDeletion:
        'Users can delete local entries directly inside the app or by clearing app storage on Android. To request deletion of any associated cloud account records, please follow the instructions on the Takalog Money Tracker Data Deletion page or email masudlabssupport@gmail.com.',
      childrensPrivacy:
        'Takalog Money Tracker is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). Masud Labs does not knowingly collect personal information from children.',
      policyChanges:
        'Masud Labs may update this Privacy Policy as features move from development into public release. Updated versions will be published on this page with a revised effective date.',
    },
    termsOfService: {
      isDraftNotice: true,
      acceptanceOfTerms:
        'By accessing or using Takalog Money Tracker once released, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.',
      permittedUse:
        'Takalog Money Tracker is provided for personal, non-commercial financial record-keeping. You agree not to misuse the application, reverse-engineer distributed binaries where prohibited by law, or interfere with connected cloud services.',
      userResponsibilities: [
        'Ensure the accuracy of financial transactions and figures you manually record.',
        'Maintain the security of your Android device and any Google Account linked for optional backup or synchronization.',
        'Back up important financial records responsibly, as personal financial tracking software is not a substitute for official bank statements or accounting advice.',
      ],
      intellectualProperty:
        'All software code, visual assets, branding, and documentation associated with Takalog Money Tracker remain the intellectual property of Masud Labs, excluding third-party libraries licensed under their respective terms.',
      serviceAvailability:
        'Takalog Money Tracker is currently in development. Following release, Masud Labs may update, modify, or discontinue features or optional cloud services with reasonable notice where practicable.',
      thirdPartyServices:
        'Optional features such as Google Sign-In, Firebase, or Google Drive backup rely on services operated by Google LLC and are subject to Google’s applicable terms and privacy policies.',
      disclaimer:
        'Takalog Money Tracker is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. The application does not provide financial, tax, investment, or legal advice.',
      limitationOfLiability:
        'To the maximum extent permitted by applicable law, Masud Labs shall not be liable for any indirect, incidental, special, consequential, or financial loss arising from the use or inability to use the application or loss of locally stored data.',
      changesToTerms:
        'Masud Labs reserves the right to revise these Terms of Service prior to and following public release. Continued use after updates constitutes acceptance of the revised terms.',
    },
    dataDeletion: {
      isDraftNotice: true,
      accountDeletionInstructions: [
        'Send an email to masudlabssupport@gmail.com with the subject line "Account & Data Deletion Request — Takalog Money Tracker".',
        'Include the email address associated with your Google Sign-In account (if cloud sync was enabled) so we can identify the corresponding cloud records.',
        'Requests are reviewed manually by the Masud Labs support team, as automated self-service server deletion is not claimed until verified in a published build.',
      ],
      personalDataDeletionInstructions: [
        'Specify whether you wish to delete cloud-synchronized transaction records, authentication profile references, or both.',
        'You will receive confirmation via email once the requested records have been processed.',
      ],
      cloudDataHandling:
        'If you used Google Drive app-private backup (appDataFolder), you can also disconnect Takalog Money Tracker and delete hidden app data directly from your Google Account / Google Drive "Manage Apps" settings. Any Firebase cloud records associated with your authenticated account can be requested for removal via support email.',
      localDataHandling:
        'Data stored locally on your Android device is never uploaded unless you enable cloud sync or backup. You can remove all local data at any time by opening Android Settings > Apps > Takalog Money Tracker > Storage > Clear Storage, or by uninstalling the application.',
      supportNotes:
        'For any questions regarding data handling or deletion requests, contact masudlabssupport@gmail.com.',
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
