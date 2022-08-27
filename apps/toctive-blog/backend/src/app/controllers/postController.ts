import { PostI } from '@toctive/toctive-blog';
import { Request, Response } from 'express';

const content = `<pre><code class="language-python">
name = 'Scott'
print 'Hi my name is ' + name
</code></pre>`;

const posts: PostI[] = [
  {
    id: 'a',
    title: 'First Post',
    content: content,
    author: 'Sameh Ashraf',
    thumbnail: 'https://s3.envato.com/files/380533636/01_Preview.png',
    createdAt: new Date(1660683048713),
  },
  {
    id: 'b',
    title: 'Second Post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum!',

    author: 'Sameh Ashraf',
    thumbnail: 'https://s3.envato.com/files/380533636/01_Preview.png',
    createdAt: new Date(1660183908713),
  },
  {
    id: 'c',
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit',
    content: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
    <br />
      <div dir="ltr">Lorem ipsum dolor **sit** amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum!</div>`,
    summary:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'Sameh Ashraf',
    thumbnail:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b2036d41871883.57b760570e4cb.png',
    createdAt: new Date(1660611048713),
  },
  {
    id: 'D',
    title: 'Lorem',
    content:
      'Lorem ipsum **dolor** sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum!',

    author: 'Sameh Ashraf',
    thumbnail: 'https://s3.envato.com/files/380533636/01_Preview.png',
    createdAt: new Date(1660611048713),
  },
];

export const getAllPosts = (req: Request, res: Response) => {
  res.send({ data: posts });
};

export const getPost = (req: Request, res: Response) => {
  const post = posts.filter((post) => post.id === req.params.postId)[0];
  if (post) {
    return res.send({ data: post });
  }
  res.status(404).send({ message: 'Post not found' });
};
