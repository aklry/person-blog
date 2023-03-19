import com.aklry.dao.BlogDao;
import com.aklry.domain.Blog;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext-dao.xml")
public class BlogDaoTest {
    @Autowired
    private BlogDao blogDao;

    @Test
    public void testFindAllBlog() {
        Blog blogById = blogDao.findBlogById(4);
        System.out.println(blogById);
    }
}
