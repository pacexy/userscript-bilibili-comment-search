import { Reply } from './reply'

interface Page {
  /**
   * 当前页码
   */
  num: number
  /**
   * 每页项数
   */
  size: number
  /**
   * 根评论条数
   */
  count: number
  /**
   * 总计评论条数
   */
  acount: number
}

interface Config {
  /**
   * 是否显示管理置顶
   */
  showadmin: number
  /**
   * (?)
   */
  showentry: number
  /**
   * 是否显示楼层号
   */
  showfloor: number
  /**
   * 是否显示话题
   */
  showtopic: number
  /**
   * 是否显示“UP 觉得很赞”标志
   */
  show_up_flag: boolean
  /**
   * 是否只读评论区
   */
  read_only: boolean
  /**
   * 是否显示删除记录
   */
  show_del_log: boolean
}

interface Hot {
  // Define properties for each hot comment item
}

interface Top {
  // Define properties for the top comment item
}

interface Notice {
  /**
   * 公告正文
   */
  content: string
  /**
   * 公告 id
   */
  id: number
  /**
   * 公告页面链接 url
   */
  link: string
  /**
   * 公告标题
   */
  title: string
}

interface Folder {
  /**
   * 评论区是否存在折叠评论
   */
  has_folded: boolean
  /**
   * 是否折叠?
   */
  is_folded: boolean
  /**
   * 相关规则页面 url
   */
  rule: string
}

interface Control {
  /**
   * 是否禁止新增评论
   * 用户涉及合约争议，锁定该用户所有稿件、动态的评论区，不允许新增评论，root_input_text和child_input_text值为“当前评论区不可新增评论”
   */
  input_disable: boolean
  /**
   * 评论框文字
   */
  root_input_text: string
  /**
   * 评论框文字
   */
  child_input_text: string
  /**
   * 空评论区文字
   */
  bg_text: string
  /**
   * 评论是否筛选后可见
   * false：无需筛选
   * true：需要筛选
   */
  web_selection: boolean
  /**
   * 答题页面链接文字
   */
  answer_guide_text: string
  /**
   * 答题页面图标 url
   */
  answer_guide_icon_url: string
  /**
   * 答题页面 ios url
   */
  answer_guide_ios_url: string
  /**
   * 答题页面安卓 url
   */
  answer_guide_android_url: string
}

interface CommentSection {
  /**
   * 页信息
   */
  page: Page
  /**
   * 评论区显示控制
   */
  config: Config
  /**
   * 评论列表
   */
  replies: Reply[] | null
  /**
   * 热评列表
   */
  hots: Hot[] | null
  /**
   * 置顶评论
   */
  upper: {
    /**
     * UP 主 mid
     */
    mid: number
    /**
     * 置顶条目
     */
    top: Top | null
  }
  /**
   * (?)
   */
  top: null
  /**
   * 评论区公告信息
   */
  notice: Notice | null
  /**
   * 投票评论?
   */
  vote: number | null
  /**
   * (?)
   */
  blacklist: number
  /**
   * (?)
   */
  assist: number
  /**
   * 评论区类型id
   */
  mode: number
  /**
   * 评论区支持的类型id
   */
  support_mode: number[]
  /**
   * 折叠相关信息
   */
  folder: Folder
  /**
   * (?)
   */
  lottery_card: null
  /**
   * 显示bvid?
   */
  show_bvid: boolean
  /**
   * 评论区输入属性
   */
  control: Control
}

export interface CommentDetailsResponse {
  /**
   * 返回值
   * 0：成功
   * -400：请求错误
   * -404：无此项
   * 12002：评论区已关闭
   * 12009：评论主体的type不合法
   */
  code: number
  /**
   * 错误信息
   * 默认为0
   */
  message: string
  /**
   * 1
   */
  ttl: number
  /**
   * 数据本体
   * 正确时：obj
   * 错误时：null
   */
  data: CommentSection | null
}

/**
 * Enum representing the different types of comments.
 */
export enum CommentType {
  VIDEO = 1, // Video稿件
  TOPIC = 2, // 话题
  ACTIVITY = 4, // 活动
  SHORT_VIDEO = 5, // 小视频
  BAN_INFO = 6, // 小黑屋封禁信息
  NOTICE = 7, // 公告信息
  LIVE_ACTIVITY = 8, // 直播活动
  ACTIVITY_ARTICLE = 9, // 活动稿件
  LIVE_NOTICE = 10, // 直播公告
  ALBUM = 11, // 相簿（图片动态）
  COLUMN = 12, // 专栏
  TICKET = 13, // 票务
  AUDIO = 14, // 音频
  JURY = 15, // 风纪委员会
  REVIEW = 16, // 点评
  DYNAMIC = 17, // 动态（纯文字动态&分享）
  PLAYLIST = 18, // 播单
  MUSIC_PLAYLIST = 19, // 音乐播单
  COMIC_1 = 20, // 漫画
  COMIC_2 = 21, // 漫画
  COMIC_3 = 22, // 漫画
  COURSE = 33, // 课程
}

export enum CommentSort {
  /**
   * 按时间
   */
  TIME = 0,
  /**
   * 按点赞数
   */
  LIKES = 1,
  /**
   * 按回复数
   */
  REPLIES = 2,
}

interface CommentRequestParams {
  /**
   * APP 登录 Token
   * APP 方式必要
   */
  access_key?: string
  /**
   * 评论区类型代码
   * 类型代码见表
   */
  type: CommentType
  /**
   * 目标评论区 id
   */
  oid: number
  /**
   * 排序方式
   * 默认为0
   * 0：按时间
   * 1：按点赞数
   * 2：按回复数
   */
  sort?: CommentSort
  /**
   * 是否不显示热评
   * 默认为0
   * 1：不显示
   * 0：显示
   */
  nohot?: number
  /**
   * 每页项数
   * 默认为20
   * 定义域：1-20
   */
  ps?: number
  /**
   * 页码
   * 默认为1
   */
  pn?: number
}
