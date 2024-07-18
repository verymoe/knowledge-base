# 数据持久化

在安卓原生开发中，常用SharedPreferences和SQLite进行数据持久化。SharedPreferences适用于简单的键值对存储，而SQLite则是一个功能强大的关系型数据库，用于存储大量复杂数据。比如QQ和微信就使用SQLite来储存聊天记录，而简单的用户设置（如主题颜色），则通常储存于Shared Preferences。

## SharedPreferences 共享偏好设置

> [!TIP]
> "SharedPreferences" 可以翻译为 "共享偏好设置" 或者简称为 "偏好设置"。
> 你可以将SharedPreferences视为一个可持久化读写的XML文件。

### 初始化共享偏好设置
```java
// 获取 SharedPreferences 实例
SharedPreferences sharedPreferences = getSharedPreferences("com.example.myapp.PREFERENCE_FILE_KEY", Context.MODE_PRIVATE);
```
这里的 "com.example.myapp.PREFERENCE_FILE_KEY" 是共享偏好设置文件的名称。可以理解为在安卓系统上存储了一个名为 "com.example.myapp.PREFERENCE_FILE_KEY.xml" 的文件，其中以键值对形式存储数据。

依照谷歌文档，假如你要对用户在应用中的设定进行持久化储存，那么你的这个共享偏好设置文件的名称就应该是 "包名.key"，如 "com.example.myapp.setting"

Context.MODE_PRIVATE 表示只有你的应用可以访问。也有别的模式，但是基本用不到，这里就不再过多叙述。

### 写入共享偏好设置
```java
// 获取 SharedPreferences.Editor 实例
SharedPreferences.Editor editor = sharedPreferences.edit();

// 写入数据
editor.putString("username", "陈睿");
editor.putInt("age", 25);

// 提交数据
editor.apply();

```

删除修改清空同上以此类推。

使用步骤1中获取的 sharedPreferences 的 edit() 方法来进行写入和修改操作。editor.putString("username", "陈睿") 中的 "username" 是键，"陈睿" 是存储的值。通常使用 editor.apply() 而不是 editor.commit() 来保存数据，因为前者是异步进行的。

以下是 `SharedPreferences.Editor` 的常见用法：

| 方法                            | 描述                                       | 示例                                      |
|---------------------------------|--------------------------------------------|-------------------------------------------|
| `putBoolean(String key, boolean value)` | 存储布尔值                                 | `editor.putBoolean("is_logged_in", true);` |
| `putInt(String key, int value)`       | 存储整数值                                 | `editor.putInt("age", 25);`                |
| `putLong(String key, long value)`     | 存储长整数值                               | `editor.putLong("timestamp", System.currentTimeMillis());` |
| `putFloat(String key, float value)`   | 存储浮点数值                               | `editor.putFloat("rating", 4.5f);`         |
| `putString(String key, String value)` | 存储字符串值                               | `editor.putString("username", "张三");`   |
| `putStringSet(String key, Set<String> values)` | 存储字符串集合                       | ```java Set<String> tags = new HashSet<>(); tags.add("Android"); tags.add("Development"); editor.putStringSet("tags", tags); ``` |
| `remove(String key)`                | 移除指定键对应的数据项                     | `editor.remove("username");`               |
| `clear()`                           | 清空所有的 SharedPreferences 数据           | `editor.clear();`                          |
| `commit()`                          | 同步提交数据修改，会阻塞当前线程直到提交完成 | `editor.commit();`                         |
| `apply()`                           | 异步提交数据修改，不会阻塞当前线程，性能更好 | `editor.apply();`                          |

### 读取共享偏好设置

```java
// 读取数据，默认值是true
boolean isFirstTime = sharedPreferences.getBoolean(KEY_FIRST_TIME, true);

```
上面的代码演示了应用如何判断用户是否第一次进入。默认值的作用是当键值对不存在时作为返回值，这是确保在第一次获取键对应的值时，即使该键在共享偏好设置中不存在，也能够有一个合理的默认值返回。

在上面提到的场景中，如果没有设定默认值 true，而在第一次进入应用时 KEY_FIRST_TIME 不存在，那么 isFirstTime 将会返回 false，这可能会导致应用在第一次进入时错误地认为用户不是第一次进入，从而跳过欢迎页或引导页的显示，从而影响用户体验。


以下是 `SharedPreferences` 的常见用法：

| 方法                                       | 描述                                           | 示例                                      |
|--------------------------------------------|------------------------------------------------|-------------------------------------------|
| `getSharedPreferences(String name, int mode)` | 获取 SharedPreferences 实例                  | `SharedPreferences sharedPreferences = context.getSharedPreferences("my_prefs", Context.MODE_PRIVATE);` |
| `getString(String key, String defaultValue)` | 获取字符串值                                   | `String username = sharedPreferences.getString("username", "");` |
| `getInt(String key, int defaultValue)`       | 获取整数值                                     | `int age = sharedPreferences.getInt("age", 0);` |
| `getLong(String key, long defaultValue)`     | 获取长整数值                                   | `long timestamp = sharedPreferences.getLong("timestamp", 0L);` |
| `getFloat(String key, float defaultValue)`   | 获取浮点数值                                   | `float rating = sharedPreferences.getFloat("rating", 0.0f);` |
| `getBoolean(String key, boolean defaultValue)` | 获取布尔值                                     | `boolean isLoggedIn = sharedPreferences.getBoolean("is_logged_in", false);` |
| `getStringSet(String key, Set<String> defaultValue)` | 获取字符串集合                             | `Set<String> tags = sharedPreferences.getStringSet("tags", new HashSet<>());` |
| `getAll()`                                  | 获取所有键值对                                 | `Map<String, ?> allEntries = sharedPreferences.getAll();` |
| `contains(String key)`                      | 检查是否包含指定键                             | `boolean containsUsername = sharedPreferences.contains("username");` |
| `edit()`                                   | 获取 SharedPreferences.Editor 实例           | `SharedPreferences.Editor editor = sharedPreferences.edit();` |

## SQlite

来日再补充这个版块，博主目前暂未使用和学习SQLite

## DataStore

DataStore 是一种新的数据存储解决方案，用于替代传统的 SharedPreferences。它是由 Google 在 Android Jetpack 库中推出的，旨在提供更现代化、类型安全和异步操作支持的数据存储选项。

同样的博主目前暂未使用和学习DataStore