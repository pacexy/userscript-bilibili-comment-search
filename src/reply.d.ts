export interface Reply {
  rpid: number
  oid: number
  type: number
  mid: number
  root: number
  parent: number
  dialog: number
  count: number
  rcount: number
  state: number
  fansgrade: number
  attr: number
  ctime: number
  rpid_str: string
  root_str: string
  parent_str: string
  like: number
  action: number
  member: Member
  content: Content
  replies: Reply[]
  assist: number
  up_action: UpAction
  invisible: boolean
  reply_control: ReplyControl
  folder: Folder
  dynamic_id_str: string
}

interface Member {
  mid: string
  uname: string
  sex: string
  sign: string
  avatar: string
  rank: string
  face_nft_new: number
  is_senior_member: number
  senior: Senior
  level_info: LevelInfo
  pendant: Pendant
  nameplate: Nameplate
  official_verify: OfficialVerify
  vip: Vip
  fans_detail: any
  user_sailing: any
  is_contractor: boolean
  contract_desc: string
  nft_interaction: any
  avatar_item: AvatarItem
}

interface Senior {}

interface LevelInfo {
  current_level: number
  current_min: number
  current_exp: number
  next_exp: number
}

interface Pendant {
  pid: number
  name: string
  image: string
  expire: number
  image_enhance: string
  image_enhance_frame: string
}

interface Nameplate {
  nid: number
  name: string
  image: string
  image_small: string
  level: string
  condition: string
}

interface OfficialVerify {
  type: number
  desc: string
}

interface Vip {
  vipType: number
  vipDueDate: number
  dueRemark: string
  accessStatus: number
  vipStatus: number
  vipStatusWarn: string
  themeType: number
  label: Label
  avatar_subscript: number
  nickname_color: string
}

interface Label {
  path: string
  text: string
  label_theme: string
  text_color: string
  bg_style: number
  bg_color: string
  border_color: string
  use_img_label: boolean
  img_label_uri_hans: string
  img_label_uri_hant: string
  img_label_uri_hans_static: string
  img_label_uri_hant_static: string
}

interface AvatarItem {
  container_size: ContainerSize
  fallback_layers: FallbackLayers
  mid: string
}

interface ContainerSize {
  width: number
  height: number
}

interface FallbackLayers {
  layers: Layer[]
  is_critical_group: boolean
}

interface Layer {
  visible: boolean
  general_spec: GeneralSpec
  layer_config: LayerConfig
  resource: Resource
}

interface GeneralSpec {
  pos_spec: PosSpec
  size_spec: SizeSpec
  render_spec: RenderSpec
}

interface PosSpec {
  coordinate_pos: number
  axis_x: number
  axis_y: number
}

interface SizeSpec {
  width: number
  height: number
}

interface RenderSpec {
  opacity: number
}

interface LayerConfig {
  tags: Tags
  is_critical?: boolean
  layer_mask?: LayerMask
}

interface Tags {
  AVATAR_LAYER?: AvatarLayer
  ICON_LAYER?: IconLayer
}

interface AvatarLayer {}

interface IconLayer {}

interface LayerMask {
  general_spec: GeneralSpec
  mask_src: MaskSrc
}

interface MaskSrc {
  src_type: number
  draw: Draw
}

interface Draw {
  draw_type: number
  fill_mode: number
  color_config: ColorConfig
}

interface ColorConfig {
  day: Day
}

interface Day {
  argb: string
}

interface Resource {
  res_type: number
  res_image?: ResImage
  res_native_draw?: ResNativeDraw
}

interface ResImage {
  image_src: ImageSrc
}

interface ImageSrc {
  src_type: number
  local?: number
  placeholder?: number
  remote?: Remote
}

interface Remote {
  url: string
  bfs_style: string
}

interface ResNativeDraw {
  draw_src: DrawSrc
}

interface DrawSrc {
  src_type: number
  draw: Draw
}

interface Night {
  argb: string
}

interface Content {
  message: string
  members: any[]
  emote: Emote
  jump_url: JumpUrl
  max_line: number
}

interface Emote {
  '[吃瓜]': GeneratedType
}

interface GeneratedType {
  id: number
  package_id: number
  state: number
  type: number
  attr: number
  text: string
  url: string
  meta: Meta
  mtime: number
  jump_title: string
}

interface Meta {
  size: number
}

interface JumpUrl {
  rul: Rul
}

interface Rul {
  title: string
  state: number
  prefix_icon: string
  app_url_schema: string
  app_name: string
  app_package_name: string
  click_report: string
  is_half_screen: boolean
  exposure_report: string
  extra: Extra
  underline: boolean
  match_once: boolean
  pc_url: string
  icon_position: number
}

interface Extra {
  goods_show_type: number
  is_word_search: boolean
  goods_cm_control: number
  goods_click_report: string
  goods_exposure_report: string
}

interface Reply {
  rpid: number
  oid: number
  type: number
  mid: number
  root: number
  parent: number
  dialog: number
  count: number
  rcount: number
  state: number
  fansgrade: number
  attr: number
  ctime: number
  rpid_str: string
  root_str: string
  parent_str: string
  like: number
  action: number
  member: Member
  content: Content
  replies: any
  assist: number
  up_action: UpAction
  invisible: boolean
  reply_control: ReplyControl
  folder: Folder
  dynamic_id_str: string
}

interface UpAction {
  like: boolean
  reply: boolean
}

interface ReplyControl {
  max_line: number
  time_desc: string
}

interface Folder {
  has_folded: boolean
  is_folded: boolean
  rule: string
}
