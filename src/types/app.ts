export type AppCategory =
  | 'Finance'
  | 'Productivity'
  | 'Utilities'
  | 'Communication'
  | 'Games'
  | 'Entertainment'
  | 'Other';

export type AppPlatform = 'Android' | 'Web' | 'Android + Web';

export type AppStatus = 'Published' | 'Beta' | 'In Development' | 'Coming Soon';

export type AppIconKey = 'takalog' | 'calendar' | 'remote' | 'candy' | 'default';

export type AppAccent = 'violet' | 'cyan' | 'teal' | 'indigo';

export interface AppFeatureItem {
  title: string;
  description: string;
  /** Distinguish live implemented capabilities from planned development scope */
  state: 'implemented' | 'planned';
}

export interface AppScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ReleaseNoteEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface DevicePermissionEntry {
  permission: string;
  purpose: string;
}

export interface PrivacyPolicyConfig {
  lastUpdated?: string;
  /** Marks policy text as awaiting final verification before public Play Store launch */
  isDraftNotice: boolean;
  introduction: string;
  informationCollected: string[];
  informationProcessed: string[];
  devicePermissions: DevicePermissionEntry[];
  googleSignIn?: {
    applicable: boolean;
    details: string;
  };
  firebaseServices?: {
    applicable: boolean;
    details: string;
  };
  googleDriveApi?: {
    applicable: boolean;
    details: string;
  };
  dataStorageAndSecurity: string;
  dataSharing: string;
  dataRetention: string;
  userRights: string[];
  accountAndDataDeletion: string;
  childrensPrivacy: string;
  policyChanges: string;
}

export interface TermsOfServiceConfig {
  lastUpdated?: string;
  isDraftNotice: boolean;
  acceptanceOfTerms: string;
  permittedUse: string;
  userResponsibilities: string[];
  intellectualProperty: string;
  serviceAvailability: string;
  thirdPartyServices: string;
  disclaimer: string;
  limitationOfLiability: string;
  changesToTerms: string;
}

export interface DataDeletionConfig {
  lastUpdated?: string;
  isDraftNotice: boolean;
  accountDeletionInstructions: string[];
  personalDataDeletionInstructions: string[];
  cloudDataHandling: string;
  localDataHandling: string;
  supportNotes: string;
}

export interface AppRecord {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: AppCategory;
  platform: AppPlatform;
  status: AppStatus;
  iconKey: AppIconKey;
  /** Optional custom image URL for future apps */
  iconUrl?: string;
  accent: AppAccent;
  featured: boolean;
  screenshots: AppScreenshot[];
  features: AppFeatureItem[];
  version?: string;
  minimumAndroidVersion?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  releaseNotes?: ReleaseNoteEntry[];
  privacyPolicy: PrivacyPolicyConfig;
  termsOfService: TermsOfServiceConfig;
  dataDeletion: DataDeletionConfig;
}
