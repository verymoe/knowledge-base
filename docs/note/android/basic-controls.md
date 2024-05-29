# 安卓基本控件

## 文本显示

### 设置文本

- 在 XML 文件中通过属性设置文本
```Xml
<TextView
        android:id="@+id/tv_hello"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="你好，世界"
        android:textColor="#66CCFF"
        android:textSize="24dp"
        android:textStyle="bold"
        android:maxLines="1"
        android:ellipsize="end" />
```

- 在Java中通过文本视图对象的 setText 方法设置文本

通常不在 Java 中控制文本默认样式，只用作于应用运行时对文本的修改。
```Java
TextView tv_hello = findViewById(R.id.tv_hello);
tv_hello.setText("Hello World!");
```

### TextView 在代码的基本用法
- 设置文本内容:
    - setText(CharSequence text): 设置文本内容
- 设置文本样式:
    - setTextColor(int color): 设置文字颜色
    - setTextSize(float size): 设置文字大小
    - setTypeface(Typeface tf): 设置字体样式
- 设置布局:
    - setGravity(int gravity): 设置文字对齐方式
    - setMaxLines(int maxLines): 设置最大行数
    - setWidth(int pixels): 设置宽度
    - setHeight(int pixels): 设置高度

### TextView 在 XML 的基本用法
- ### 基础属性
    - **text:** (format: string)  要显示的文字。
    - **hint:** (format: string)  当文字为空时显示的提示文字。
    - **textColor:**  文字的颜色。
    - **textSize:** (format: dimension)  文字的大小。
    - **textColorHint:**  提示文字的颜色。
    - **textAppearance:**  基本文字颜色、字体、大小和样式。
    - **textStyle:**  文字的样式（正常、粗体、斜体、粗体|斜体）。
    - **textFontWeight:** (format: integer)  TextView 中使用的字体的粗细。
    - **textLocale:** (format: string)  指定文字的 LocaleList。
    - **gravity:**  指定如何通过视图的 x 和/或 y 轴对齐文字。
    - **maxLines:** (format: integer)  使 TextView 最多有这么多行高。
    - **lines:** (format: integer)  使 TextView 恰好有这么多行高。
    - **minLines:** (format: integer)  使 TextView 至少有这么多行高。
    - **maxWidth:**  使 TextView 最多有这么多像素宽。
    - **ellipsize:**  指定当文字长度超过视图宽度时是否要省略文字。
    - **singleLine:** (format: boolean)  指定 TextView 是否应该是单行的。
    - **enabled:** (format: boolean)  指定 TextView 是否启用。
    - **autoLink:**  自动链接 URL、电子邮件地址、电话号码和地址。
    - **inputType:**  指定允许的输入类型（例如，文字、数字、密码）。
    - **allowUndo:** (format: boolean)  是否应该允许对可编辑文字进行撤消操作。

- ### 额外属性
    - **textAllCaps:** (format: boolean)  以全大写形式显示文字。
    - **lineBreakStyle:**  指定文字换行的换行样式。
    - **lineBreakWordStyle:**  指定文字换行的断字策略。
    - **justificationMode:**  指定对齐模式。
    - **letterSpacing:** (format: float)  文字字母间距。
    - **elegantTextHeight:** (format: boolean)  优雅的文字高度，特别是对于复杂脚本文字。
    - **lineSpacingExtra:** (format: dimension)  文字行之间的额外间距。
    - **lineSpacingMultiplier:** (format: float)  文字行之间的额外间距，作为乘数。
    - **lineHeight:** (format: dimension)  文字行之间的显式高度。
    - **firstBaselineToTopHeight:** (format: dimension)  从 TextView 顶部到第一个文字基线的距离。
    - **lastBaselineToBottomHeight:** (format: dimension)  从 TextView 底部到最后一个文字基线的距离。

## 视图基础

### 设置视图的尺寸
参考：[ViewGroup.LayoutParams｜Android Studio Developers](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams)
1. **固定尺寸（dimension）**:
   - 通过设置 `layout_width` 和 `layout_height` 属性为一个具体的尺寸值（如 "12dip"）来指定视图的宽度和高度。
   ``` Xml
   <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="你好，世界"/>
   ```
   ![viUK.png](https://img2.moeblog.vip/images/viUK.png)
2. **相对尺寸（wrap_content）**:
   - 将 `layout_width` 和 `layout_height` 属性设置为 `wrap_content`，使视图的尺寸仅足以包裹其内容。
   ``` Xml
   <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="300dp"
        android:background="#66ccff"/>
   ```
    ![vgzt.png](https://img2.moeblog.vip/images/vgzt.png)

3. **填充父容器（match_parent）**:
   - 将 `layout_width` 和 `layout_height` 属性设置为 `match_parent`，使视图的尺寸与其父容器相同（减去内边距）。
   ``` Xml
   <LinearLayout
        android:layout_width="300dp"
        android:layout_height="300dp"
        android:padding="30dp"
        android:background="#66ccff">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:background="#F44336"/>
    </LinearLayout>
   ```
   ![vH6W.png](https://img2.moeblog.vip/images/vH6W.png)

### 设置视图的间距
- 内边距 （它指定了当前视图与周围**平级**视图之间的距离）
    1. **通用内边距属性**:
       - `padding`：设置视图所有边的内边距。
       - `paddingHorizontal`：设置视图水平方向（左右）的内边距。
       - `paddingVertical`：设置视图垂直方向（上下）的内边距。

    2. **单独设置内边距**:
       - `paddingLeft`：设置视图左边的内边距。
       - `paddingTop`：设置视图上边的内边距。
       - `paddingRight`：设置视图右边的内边距。
       - `paddingBottom`：设置视图下边的内边距。

    3. **方向性内边距**:
       - `paddingStart`：设置视图开始方向（根据语言方向）的内边距。
       - `paddingEnd`：设置视图结束方向（根据语言方向）的内边距。

- 外边距（它指定了当前视图与内部**下级**视图之间的距离）
    1. **通用外边距属性**:
       - `layout_margin`：设置视图所有边的外边距。
       - `layout_marginHorizontal`：设置视图水平方向（左右）的外边距。
       - `layout_marginVertical`：设置视图垂直方向（上下）的外边距。

    2. **单独设置外边距**:

       - `layout_marginLeft`：设置视图左边的外边距。
       - `layout_marginTop`：设置视图上边的外边距。
       - `layout_marginRight`：设置视图右边的外边距。
       - `layout_marginBottom`：设置视图下边的外边距。

    3. **方向性外边距**:

       - `layout_marginStart`：设置视图开始方向（根据语言方向）的外边距。
       - `layout_marginEnd`：设置视图结束方向（根据语言方向）的外边距。

    **注意**: 

    - 如果同时设置了通用外边距属性和单独设置的外边距属性，则通用外边距属性优先生效。
    - 方向性外边距属性用于支持不同语言方向的布局，例如，在从右到左的语言中，`layout_marginStart` 对应的是右侧外边距，而 `layout_marginEnd` 对应的是左侧外边距。

``` Xml
<!--内边距 30dp 的蓝色方块-->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="300dp"
        android:background="#66ccff"
        android:padding="30dp">

        <!--黄色方块-->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:background="#FFEB3B">

            <!--外边距 30dp 的红色方块-->
            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:layout_margin="30dp"
                android:background="#F44336">

                <!--右侧外边距 100dp 的绿色方块-->
                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:layout_marginRight="100dp"
                    android:background="#8BC34A" />
            </LinearLayout>
        </LinearLayout>
    </LinearLayout>
```
![vmaH.png](https://img2.moeblog.vip/images/vmaH.png)

### 设置视图的对齐方式



## 常用布局

- 线性布局LinearLayout
- 相对布局RelativeLayout
- 网格布局GridLayout
- 滚动视图ScrollView

## 按钮控件

- 按钮控件Button
- 点击事件和长按事件
- 禁用与恢复按钮

## 图像显示

- 图像视图ImageView
- 图像按钮ImageButton
- 禁用与恢复控制
- 同时展示文本与图像