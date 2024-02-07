import type { FileTypeAndExtNamePairs } from './fileTypeAndExtName'

/**
 * 文件类型和扩展名成对列表
 */
export const fileTypeAndExtNamePairs: FileTypeAndExtNamePairs = [
  // Microsoft Word
  ['application/msword', ['.doc']],
  ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', ['.docx']],

  // Microsoft Excel
  ['application/vnd.ms-excel', ['.xls']],
  ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', ['.xlsx']],

  // Microsoft PowerPoint
  ['application/vnd.ms-powerpoint', ['.ppt']],
  ['application/vnd.openxmlformats-officedocument.presentationml.presentation', ['.pptx']],

  // GZ 压缩文件格式
  ['application/x-gzip', ['.gz', '.gzip']],

  // ZIP 压缩文件格式
  ['application/zip', ['.zip', '.7zip']],

  // RAR 压缩文件格式
  ['application/rar', ['.rar']],

  // TAR 压缩文件格式
  ['application/x-tar', ['.tar', '.taz']],

  // PDF 是 Portable Document Format 的简称，即便携式文档格式
  ['application/pdf', ['.pdf']],

  // RTF 是指 Rich Text Format，即通常所说的富文本格式
  ['application/rtf', ['.rtf']],

  // 图像格式
  ['image/gif', ['.gif']],
  ['image/jpeg', ['.jpeg', '.jpg', '.jpg2']],
  ['image/png', ['.png']],
  ['image/tiff', ['.tif', '.tiff']],
  ['image/bmp', ['.bmp']],
  ['image/svg+xml', ['.svg', '.svgz']],
  ['image/webp', ['.webp']],
  ['image/x-icon', ['.ico']],

  // Photoshop 源文件格式
  ['application/x-photoshop', ['.psd']],

  // 普通文本格式
  ['text/plain', ['.txt']],

  // Javascript 脚本文件
  ['text/javascript', ['.js', '.cjs', '.mjs']],

  // CSS 样式表
  ['text/css', ['.css']],

  // HTML 文件格式
  ['text/html', ['.html', '.shtml', '.htm']],

  // XML 文件格式
  ['text/xml', ['.xml']],

  // XHTML 文件格式
  ['application/xhtml+xml', ['.xhtml', '.xht']],

  // Java 归档文件格式
  ['application/java-archive', ['.jar']],

  // Android 平台包文件格式
  ['application/vnd.android.package-archive', ['.apk']],

  // Windows 系统可执行文件格式
  ['application/octet-stream', ['.exe']],

  // PEM 文件格式
  ['application/x-x509-user-cert', ['.crt', '.pem']],

  // 音频格式
  ['audio/mpeg', ['.mp3']],
  ['audio/midi', ['.mid', '.midi']],
  ['audio/x-wav', ['.wav']],
  ['audio/x-mpegurl', ['.m3u']],
  ['audio/x-m4a', ['.m4a']],
  ['audio/ogg', ['.ogg']],
  ['audio/x-realaudio', ['.ra']],

  // 视频格式
  ['video/mp4', ['.mp4']],
  ['video/mpeg', ['.mpg', '.mpe', '.mpege']],
  ['video/quicktime', ['.qt', '.mov']],
  ['video/x-m4v', ['.m4v']],
  ['video/x-ms-wmv', ['.wmv']],
  ['video/x-msvideo', ['.avi']],
  ['video/webm', ['.webm']],
  ['video/x-flv', ['.flv']],

  // CSV 文件格式
  ['text/csv', ['.csv']],

  // JSON 文件格式
  ['application/json', ['.json', '.jsonc', '.json5']],

  // 字体
  ['font/ttf', ['.ttf', '.ttf2']],
  ['font/otf', ['.otf']],
  ['font/woff', ['.woff']],
  ['font/woff2', ['.woff2']],
  ['application/vnd.ms-fontobject', ['.eot']],
]
