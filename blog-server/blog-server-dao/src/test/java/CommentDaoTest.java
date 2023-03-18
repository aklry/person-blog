import com.aklry.dao.CommentDao;
import com.aklry.domain.Comment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext-dao.xml")
public class CommentDaoTest {
    @Autowired
    private CommentDao commentDao;
    @Test
    public void testFindComment() {
        List<Comment> all = commentDao.findAll();
        all.forEach(System.out::println);
    }
}
