import com.aklry.dao.AdminDao;
import com.aklry.domain.Admin;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext-dao.xml")
public class AdminDaoTest {
    @Autowired
    private AdminDao adminDao;
    @Test
    public void testFindByParams() {
        Admin admin = new Admin("aklry", "010810LRY");
        Admin byParams = adminDao.findByParams(admin);
        System.out.println(byParams);
    }

    @Test
    public void testListAdmins() {
        List<Admin> admins = adminDao.listAdmin();
        admins.forEach(System.out::println);
    }

    @Test
    public void testAddAdmin() {
        Admin admin = new Admin();
        admin.setUsername("王五");
        admin.setPassword("qwertyu098");
        admin.setRole("普通管理员");
//        int result = 1 / 0;
        adminDao.addAdmin(admin.getUsername(),admin.getPassword(), admin.getRole());
    }

    @Test
    public void testFindByUsernameLike() {
        List<Admin> byUsernameLike = adminDao.findByUsernameLike("%张%");
        byUsernameLike.forEach(System.out::println);
    }
}
