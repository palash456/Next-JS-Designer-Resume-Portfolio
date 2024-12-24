import Link from "next/link";
import Date from '@library/date';

const PaginatedBlogPosts = ({ items, columns = 2 }) => {
  return (
    <>
      {items.map((item, index) => (
      <div className={columns == 3 ? "col-lg-4": "col-lg-6"} key={`blog-item-${index}`}>

        {/* blog post card */}
        <div className="art-a art-blog-card">
          {/* post cover */}
          <Link href={`/blog/${item.id}`} className="art-port-cover">
            {/* img */}
            <img src={item.image} alt={item.title} />
          </Link>
          {/* post cover end */}
          {/* post description */}
          <div className="art-post-description">
            <div className="art-project-category mb-15">
              <span className="art-el-date"><Date dateString={item.date} /></span> / <span className="art-el-category">{item.categories.join(', ')}</span>
            </div>
            {/* title */}
            <Link href={`/blog/${item.id}`}>
              <h5 className="mb-15">{item.title}</h5>
            </Link>
            {/* text */}
            <div className="mb-15">{item.short}</div>
            {/* link */}
            <Link href={`/blog/${item.id}`} className="art-link art-color-link art-w-chevron">Read more</Link>
          </div>
          {/* post description end */}
        </div>
        {/* blog post card end */}

      </div>
      ))}      
    </>
  );
};
export default PaginatedBlogPosts;
  