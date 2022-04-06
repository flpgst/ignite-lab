import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { ProducsService } from 'src/services/products.service';
import { CreateProductInput } from '../inputs/create-product-input';
import { Product } from './models/products';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProducsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
