export enum Branding {
  CHURCH_NAME = "Calgary Filipino Methodist Church",
  CHURCH_NAME_ABBREVIATION = "CFMC",
  CHURCH_ADDRESS = "419 Northmount Dr NW, Calgary, AB",
  CHURCH_POSTAL_CODE = "T2K 3H7",
  CHURCH_PHONE_NUMBER = "1 (587) 888-4211",
  CHURCH_EMAIL = "methodist.cfmc@gmail.com",
  CHURCH_FACEBOOK_URL = "https://www.facebook.com/calgaryfilipino.methodistchurch",
}

export enum ModalButtonLabels {
  CLOSE = "Close",
  SUBMIT = "Submit",
  LEARN_MORE = "Learn More",
  ANNOUNCEMENTS = "Announcements",
}

export enum PublicLabels {
  ABOUT = "About",
  MEDIA = "Media",
  GET_INVOLVED = "Get Involved",
  CONTACT_US = "Contact Us",
  MISSION_VISION = "Mission & Vision",
  OUR_MISSION_AND_VISION = "Our Mission & Vision",
  MINISTRIES = "Ministries",
  LEADERSHIP = "Leadership",
  COMMUNITY = "Community",
  ANNOUNCEMENTS = "Announcements",
  INQUIRE = "Inquire",
  UPCOMING_EVENTS = "Upcoming Events",
  BIBLE_STUDY = "Bible Study",
  MUSIC = "Music",
  TITHES_AND_OFFERINGS = "Tithes and Offerings",
  GIVE = "Give",
  HISTORY = "History",
  WHAT_WE_BELIEVE = "What We Believe",
}

export enum CountdownLabels {
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "minutes",
  SECONDS = "seconds",
}

export enum EventType {
  SUNDAY_WORSHIP = "Sunday worship",
  EVENT = "Event",
}

export enum LiveStreamLabels {
  HEADING = "Watch our Latest Service",
  DESCRIPTION = "We hold our worship services every Sunday at 2:00 PM.",
  BUTTON_TEXT = "Visit Our Facebook Page",
  SUBTEXT = "Can't make it in person? Watch our live stream online",
  SERVICE_TIME = "2:00 PM",
  TOOLTIP_TEXT = "Navigate to our Facebook page",
}

export enum FooterLabels {
  ADDRESS = "Address",
  CONTACT = "Contact",
  NAVIGATION = "Navigation",
  COPYRIGHT_NOTICE = "© 2025",
}

export enum ContactUsOptions {
  REQUEST_PRAYER_SUPPORT = "Request prayer support",
  REQUEST_PASTORAL_VISIT = "Request a pastoral visit (home or hospital)",
  HOME_BIBLE_STUDY = "Join a home bible study or discipleship group",
  DESIRE_CHURCH_MEMBERSHIP = "Interested in church membership",
  BAPTISM_INQUIRY = "Baptism inquiry",
  REQUEST_PASTORAL_COUNSELING = "Request pastoral counseling",
  REQUEST_BLESSING_DEDICATION = "Request a blessing or dedication (home, vehicle, business, project)",
  REQUEST_FUNERAL_MEMORIAL_SERVICE = "Request a funeral or memorial service",
  REQUEST_MARRIAGE_OFFICIANT = "Request a marriage officiant",
}

export enum ConnectWithUsOption {
  CONNECT_WITH_US = "Connect with us",
}

export enum MediaRequest {
  GENERAL_MEDIA_REQUEST = "General Media Request",
}

export enum AllowedColorSchemes {
  PURPLE = "purple",
  GREEN = "green",
  RED = "red",
  YELLOW = "yellow",
}

export enum AnnouncementCategory {
  ALL = "All",
  BIRTHDAY = "Birthday",
  WEDDING_ANNIVERSARY = "Wedding Anniversary",
  PRAYER_REQUEST = "Prayer Request",
  EVENT = "Event",
}

export const ANNOUNCEMENT_CATEGORY_COLORS: Record<string, string> = {
  [AnnouncementCategory.BIRTHDAY]: AllowedColorSchemes.PURPLE,
  [AnnouncementCategory.WEDDING_ANNIVERSARY]: AllowedColorSchemes.YELLOW,
  [AnnouncementCategory.PRAYER_REQUEST]: AllowedColorSchemes.GREEN,
  [AnnouncementCategory.EVENT]: AllowedColorSchemes.RED,
};

export const ANNOUNCEMENT_CATEGORY_GRADIENTS: Record<string, string> = {
  [AnnouncementCategory.BIRTHDAY]: "linear(to-r, purple.400, purple.600)",
  [AnnouncementCategory.WEDDING_ANNIVERSARY]:
    "linear(to-r, yellow.400, yellow.600)",
  [AnnouncementCategory.PRAYER_REQUEST]: "linear(to-r, green.400, green.600)",
  [AnnouncementCategory.EVENT]: "linear(to-r, red.400, red.600)",
};

export enum EventStatus {
  ARCHIVED = "archived",
  INACTIVE = "inactive",
  FEATURED = "featured",
  UPCOMING = "upcoming",
}

export enum Inquiries {
  CONNECT = "connect",
  PRAYER = "prayer",
  MEDIA = "media",
}
