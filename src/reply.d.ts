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
  up_action: UpAction2
  invisible: boolean
  reply_control: ReplyControl2
  folder: Folder2
  dynamic_id_str: string
}

export interface Member {
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

export interface Senior {}

export interface LevelInfo {
  current_level: number
  current_min: number
  current_exp: number
  next_exp: number
}

export interface Pendant {
  pid: number
  name: string
  image: string
  expire: number
  image_enhance: string
  image_enhance_frame: string
}

export interface Nameplate {
  nid: number
  name: string
  image: string
  image_small: string
  level: string
  condition: string
}

export interface OfficialVerify {
  type: number
  desc: string
}

export interface Vip {
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

export interface Label {
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

export interface AvatarItem {
  container_size: ContainerSize
  fallback_layers: FallbackLayers
  mid: string
}

export interface ContainerSize {
  width: number
  height: number
}

export interface FallbackLayers {
  layers: Layer[]
  is_critical_group: boolean
}

export interface Layer {
  visible: boolean
  general_spec: GeneralSpec
  layer_config: LayerConfig
  resource: Resource
}

export interface GeneralSpec {
  pos_spec: PosSpec
  size_spec: SizeSpec
  render_spec: RenderSpec
}

export interface PosSpec {
  coordinate_pos: number
  axis_x: number
  axis_y: number
}

export interface SizeSpec {
  width: number
  height: number
}

export interface RenderSpec {
  opacity: number
}

export interface LayerConfig {
  tags: Tags
  is_critical?: boolean
  layer_mask?: LayerMask
}

export interface Tags {
  AVATAR_LAYER?: AvatarLayer
  ICON_LAYER?: IconLayer
}

export interface AvatarLayer {}

export interface IconLayer {}

export interface LayerMask {
  general_spec: GeneralSpec2
  mask_src: MaskSrc
}

export interface GeneralSpec2 {
  pos_spec: PosSpec2
  size_spec: SizeSpec2
  render_spec: RenderSpec2
}

export interface PosSpec2 {
  coordinate_pos: number
  axis_x: number
  axis_y: number
}

export interface SizeSpec2 {
  width: number
  height: number
}

export interface RenderSpec2 {
  opacity: number
}

export interface MaskSrc {
  src_type: number
  draw: Draw
}

export interface Draw {
  draw_type: number
  fill_mode: number
  color_config: ColorConfig
}

export interface ColorConfig {
  day: Day
}

export interface Day {
  argb: string
}

export interface Resource {
  res_type: number
  res_image?: ResImage
  res_native_draw?: ResNativeDraw
}

export interface ResImage {
  image_src: ImageSrc
}

export interface ImageSrc {
  src_type: number
  local?: number
  placeholder?: number
  remote?: Remote
}

export interface Remote {
  url: string
  bfs_style: string
}

export interface ResNativeDraw {
  draw_src: DrawSrc
}

export interface DrawSrc {
  src_type: number
  draw: Draw2
}

export interface Draw2 {
  draw_type: number
  fill_mode: number
  color_config: ColorConfig2
}

export interface ColorConfig2 {
  is_dark_mode_aware: boolean
  day: Day2
  night: Night
}

export interface Day2 {
  argb: string
}

export interface Night {
  argb: string
}

export interface Content {
  message: string
  members: any[]
  emote: Emote
  jump_url: JumpUrl
  max_line: number
}

export interface Emote {
  '[吃瓜]': GeneratedType
}

export interface GeneratedType {
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

export interface Meta {
  size: number
}

export interface JumpUrl {
  rul: Rul
}

export interface Rul {
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

export interface Extra {
  goods_show_type: number
  is_word_search: boolean
  goods_cm_control: number
  goods_click_report: string
  goods_exposure_report: string
}

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
  member: Member2
  content: Content2
  replies: any
  assist: number
  up_action: UpAction
  invisible: boolean
  reply_control: ReplyControl
  folder: Folder
  dynamic_id_str: string
}

export interface Member2 {
  mid: string
  uname: string
  sex: string
  sign: string
  avatar: string
  rank: string
  face_nft_new: number
  is_senior_member: number
  senior: Senior2
  level_info: LevelInfo2
  pendant: Pendant2
  nameplate: Nameplate2
  official_verify: OfficialVerify2
  vip: Vip2
  fans_detail: any
  user_sailing: any
  is_contractor: boolean
  contract_desc: string
  nft_interaction: any
  avatar_item: AvatarItem2
}

export interface Senior2 {}

export interface LevelInfo2 {
  current_level: number
  current_min: number
  current_exp: number
  next_exp: number
}

export interface Pendant2 {
  pid: number
  name: string
  image: string
  expire: number
  image_enhance: string
  image_enhance_frame: string
}

export interface Nameplate2 {
  nid: number
  name: string
  image: string
  image_small: string
  level: string
  condition: string
}

export interface OfficialVerify2 {
  type: number
  desc: string
}

export interface Vip2 {
  vipType: number
  vipDueDate: number
  dueRemark: string
  accessStatus: number
  vipStatus: number
  vipStatusWarn: string
  themeType: number
  label: Label2
  avatar_subscript: number
  nickname_color: string
}

export interface Label2 {
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

export interface AvatarItem2 {
  container_size: ContainerSize2
  fallback_layers: FallbackLayers2
  mid: string
}

export interface ContainerSize2 {
  width: number
  height: number
}

export interface FallbackLayers2 {
  layers: Layer2[]
  is_critical_group: boolean
}

export interface Layer2 {
  visible: boolean
  general_spec: GeneralSpec3
  layer_config: LayerConfig2
  resource: Resource2
}

export interface GeneralSpec3 {
  pos_spec: PosSpec3
  size_spec: SizeSpec3
  render_spec: RenderSpec3
}

export interface PosSpec3 {
  coordinate_pos: number
  axis_x: number
  axis_y: number
}

export interface SizeSpec3 {
  width: number
  height: number
}

export interface RenderSpec3 {
  opacity: number
}

export interface LayerConfig2 {
  tags: Tags2
  is_critical?: boolean
  layer_mask?: LayerMask2
}

export interface Tags2 {
  AVATAR_LAYER?: AvatarLayer2
  ICON_LAYER?: IconLayer2
}

export interface AvatarLayer2 {}

export interface IconLayer2 {}

export interface LayerMask2 {
  general_spec: GeneralSpec4
  mask_src: MaskSrc2
}

export interface GeneralSpec4 {
  pos_spec: PosSpec4
  size_spec: SizeSpec4
  render_spec: RenderSpec4
}

export interface PosSpec4 {
  coordinate_pos: number
  axis_x: number
  axis_y: number
}

export interface SizeSpec4 {
  width: number
  height: number
}

export interface RenderSpec4 {
  opacity: number
}

export interface MaskSrc2 {
  src_type: number
  draw: Draw3
}

export interface Draw3 {
  draw_type: number
  fill_mode: number
  color_config: ColorConfig3
}

export interface ColorConfig3 {
  day: Day3
}

export interface Day3 {
  argb: string
}

export interface Resource2 {
  res_type: number
  res_image?: ResImage2
  res_native_draw?: ResNativeDraw2
}

export interface ResImage2 {
  image_src: ImageSrc2
}

export interface ImageSrc2 {
  src_type: number
  placeholder?: number
  remote?: Remote2
  local?: number
}

export interface Remote2 {
  url: string
  bfs_style: string
}

export interface ResNativeDraw2 {
  draw_src: DrawSrc2
}

export interface DrawSrc2 {
  src_type: number
  draw: Draw4
}

export interface Draw4 {
  draw_type: number
  fill_mode: number
  color_config: ColorConfig4
}

export interface ColorConfig4 {
  is_dark_mode_aware: boolean
  day: Day4
  night: Night2
}

export interface Day4 {
  argb: string
}

export interface Night2 {
  argb: string
}

export interface Content2 {
  message: string
  members: Member3[]
  jump_url: JumpUrl2
  max_line: number
  at_name_to_mid?: AtNameToMid
  emote?: Emote2
}

export interface Member3 {
  mid: string
  uname: string
  sex: string
  sign: string
  avatar: string
  rank: string
  face_nft_new: number
  is_senior_member: number
  senior: Senior3
  level_info: LevelInfo3
  pendant: Pendant3
  nameplate: Nameplate3
  official_verify: OfficialVerify3
  vip: Vip3
}

export interface Senior3 {}

export interface LevelInfo3 {
  current_level: number
  current_min: number
  current_exp: number
  next_exp: number
}

export interface Pendant3 {
  pid: number
  name: string
  image: string
  expire: number
  image_enhance: string
  image_enhance_frame: string
}

export interface Nameplate3 {
  nid: number
  name: string
  image: string
  image_small: string
  level: string
  condition: string
}

export interface OfficialVerify3 {
  type: number
  desc: string
}

export interface Vip3 {
  vipType: number
  vipDueDate: number
  dueRemark: string
  accessStatus: number
  vipStatus: number
  vipStatusWarn: string
  themeType: number
  label: Label3
  avatar_subscript: number
  nickname_color: string
}

export interface Label3 {
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

export interface JumpUrl2 {}

export interface AtNameToMid {
  主宰X7: number
}

export interface Emote2 {
  '[笑哭]': GeneratedType2
}

export interface GeneratedType2 {
  id: number
  package_id: number
  state: number
  type: number
  attr: number
  text: string
  url: string
  meta: Meta2
  mtime: number
  jump_title: string
}

export interface Meta2 {
  size: number
}

export interface UpAction {
  like: boolean
  reply: boolean
}

export interface ReplyControl {
  max_line: number
  time_desc: string
}

export interface Folder {
  has_folded: boolean
  is_folded: boolean
  rule: string
}

export interface UpAction2 {
  like: boolean
  reply: boolean
}

export interface ReplyControl2 {
  max_line: number
  sub_reply_entry_text: string
  sub_reply_title_text: string
  time_desc: string
}

export interface Folder2 {
  has_folded: boolean
  is_folded: boolean
  rule: string
}
