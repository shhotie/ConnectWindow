package com.app.dao;

import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest // To tell SC , to scan ONLY DAO layer beans
@AutoConfigureTestDatabase(replace = Replace.NONE) // to Tell SC --
//not to replace actual DB by the test DB
//@Rollback(false) => no rollback after the test completes!
class TestProductDao {


//	private ProductDao dao;

//	@Test
//	void testFindByProductCategoryCategoryName() {
//		List<Product> products = dao.findByProductCategoryCategoryName("Foot Wear");
//		products.forEach(System.out::println);
//		assertEquals(2, products.size());
//	}

}
